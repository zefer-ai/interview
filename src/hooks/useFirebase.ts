import { getDatabase, onValue, ref, update } from 'firebase/database';
import { useCallback, useEffect, useState } from 'react';
import { getNewKey } from '../helpers';


export const useFirebase = <T>({
  path,
  skip,
}: {
  path: string;
  skip?: boolean;
}) => {
  const [model, setModel] = useState<T>();
  const [loading, setLoading] = useState(true);

  
  return {
    model,
    loading,
  } as {
    model: T;
    loading: boolean;
  };
};
