import React from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import style from "./CustomMap.module.css";
export default function CustomMap() {
  return (
    <div>
      <YMaps>
        <div>
          <Map
            className={style.map}
            defaultState={{ center: [55.75, 37.57], zoom: 10 }}
          />
        </div>
      </YMaps>
    </div>
  );
}
