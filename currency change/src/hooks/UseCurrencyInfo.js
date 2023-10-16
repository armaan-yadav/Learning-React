import { useEffect, useState } from "react";

function UseCurrencyInfo(currency) {
  //currency NOT IN BRACKETS coz this is not a component!!! it's a hook(function)
  let [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((response) => response.json()) //data recieved from api could be in string so we converted it into json format
      .then((response) => {
        setData(response[currency]);
      });
  }, [currency]);
  return data;
}

export default UseCurrencyInfo;
