import React from "react";
import { useLocation } from "react-router-dom";

export default function Contact() {
  const queryString = useLocation().search;

  console.log(queryString);
  const queryParams = new URLSearchParams(queryString);

  console.log(queryParams);
  const name = queryParams.get("name");

  return (
    <div>
      <h2>Hey {name}, Contact us here...</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quis
        dignissimos. Molestiae ipsam magnam fuga necessitatibus accusantium cum
        doloremque dolore qui quas nostrum eligendi minima
      </p>
    </div>
  );
}
