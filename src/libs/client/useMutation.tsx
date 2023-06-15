import { useState } from "react";

export default function useMutation(
  url: string
): [
  (data: any) => void,
  { loading: boolean; data: undefined | any; error: undefined | any }
] {
  // useState를 여러번 사용하는 것보다 object를 이용해서 상태관리 하는것이 더 깔끔할듯
  // const [state, setState] = useState({
  //   loading: false,
  //   data: undefined,
  //   error: undefined,
  // });

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);

  function mutation(data: any) {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json().catch(() => {}))
      // shorts cut
      // then(json => setData(json));
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }
  return [mutation, { loading, data, error }];
}
