"use client";

import React, {
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

interface PlacemarkProps {
  type: String;
  features: Array<Mark>;
}

interface Mark {
  type: String;
  id: Number;
  geometry: {
    type: String;
    coordinates: Array<number>[];
  };
  properties: {
    hintContent: String;
  };
  status: String;
}

export default function CustomMap() {
  const data = `{
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "id": 0,
        "geometry": {
          "type": "Point",
          "coordinates": [53.674244, 23.737227]
        },
        "properties": {
          "hintContent": "Казановского 11"
        },
        "status": "free"
      },
      {
        "type": "Feature",
        "id": 1,
        "geometry": {
          "type": "Point",
          "coordinates": [53.682719, 23.831406]
        },
        "properties": {
          "hintContent": "Виленская 6"
        },
        "status": "free"
      },
      {
        "type": "Feature",
        "id": 2,
        "geometry": {
          "type": "Point",
          "coordinates": [53.656318, 23.849840]
        },
        "properties": {
          "hintContent": "Янки Купалы 80/2"
        },
        "status": "busy"
      },
      {
        "type": "Feature",
        "id": 3,
        "geometry": {
          "type": "Point",
          "coordinates": [53.622756, 23.814832]
        },
        "properties": {
          "hintContent": "Великая Ольшанка 15"
        },
        "status": "busy"
      },
      {
        "type": "Feature",
        "id": 4,
        "geometry": {
          "type": "Point",
          "coordinates": [53.685108, 23.839967]
        },
        "properties": {
          "hintContent": "Ожешко 22"
        },
        "status": "free"
      }
    ]
  }`;

  const points: PlacemarkProps = JSON.parse(data) as PlacemarkProps;
  const Marks: Array<Mark> = points.features;
  const MarksR: Array<Mark> = Marks.filter((point) => point.status === "free");
  const MarksB: Array<Mark> = Marks.filter((point) => point.status === "busy");

  return (
    <div>
      <YMaps>
        <Map
          className="h-[600px] w-[600px]"
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 5,
          }}
        >
          {MarksR.map((point) => (
            <>
              <Placemark
                key={`id-` + point.id}
                geometry={point.geometry.coordinates}
                options={{ iconColor: "#FF0000" }}
              />
            </>
          ))}
          {MarksB.map((point) => (
            <>
              <Placemark
                key={`id-` + point.id}
                geometry={point.geometry.coordinates}
                options={{ iconColor: "#0000FF" }}
              />
            </>
          ))}
        </Map>
      </YMaps>
    </div>
  );
}
