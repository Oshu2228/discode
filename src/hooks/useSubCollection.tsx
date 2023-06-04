import React, { useEffect, useState } from 'react'
import {
  collection,
  query,
  onSnapshot,
  DocumentData,
  Query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from '../firebase';
import { useAppSelector } from '../app/hooks';

interface Message {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

const useSubCollection = (collectionName: string, subCollectionName:string) => {
  const [subDocuments, setSubDocuments] = useState<Message[]>([]);
  const channelId = useAppSelector((state) => state.channel.channelId);
  

  useEffect(() => {
    let collectionRef = collection(
      db,
      collectionName,
      String(channelId),
      subCollectionName
    );

    const collectionRefOrderBy = query(
      collectionRef,
      orderBy("timestamp", "desc")
    );

    onSnapshot(collectionRefOrderBy, (snapshot) => {
      let results: Message[] = [];
      snapshot.docs.forEach((doc) => {
        results.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setSubDocuments(results);
      console.log(results);
    });
  }, [channelId]);
  return {subDocuments}
}

export default useSubCollection