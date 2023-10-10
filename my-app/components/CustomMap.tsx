"use client";

import React, {
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  YMaps,
  Map,
  Placemark,
  Clusterer,
  ZoomControl,
} from "@pbe/react-yandex-maps";
import { json } from "stream/consumers";
import axios, { AxiosResponse } from "axios";
import { GetAllCoordinatesRes, coordinateObjEntity } from "./GetCoordinatesRes";
import pvz from "@/data/pvz.json";

interface IPVZ {
  _id: I_id;
  code: string;
  name: string;
  location: ILocation;
  workedTime: string;
  pics: string[];
  type: string;
  phone: string[];
  deliveryCompany: string;
  ___v: number;
}
interface I_id {
  $oid: string;
}
interface ILocation {
  longitude: string;
  latitude: string;
  country_code: string;
  region_code: number;
  region: string;
  city_code: number;
  fullAddress: string;
  city: string;
  fiasCode: string;
  postal_code: string;
  address: string;
}

export default function CustomMap() {
  //const [zoom, setZoom] = useState(5);

  //const points: PlacemarkProps = JSON.parse(data) as PlacemarkProps;
  const Marks: Array<IPVZ> = pvz as Array<IPVZ>;
  const MarksB: Array<IPVZ> = Marks.filter(
    (point) => point.deliveryCompany === "Почта России"
  );
  const MarksG: Array<IPVZ> = Marks.filter(
    (point) => point.deliveryCompany === "СДЭК"
  );

  return (
    <div>
      <YMaps>
        <Map
          className="h-[600px] w-[600px]"
          defaultState={{
            center: [55.751574, 37.573856],
            zoom: 5,

            controls: [],
          }}
        >
          <>
            <ZoomControl options={{ visible: false }} />
          </>
          {MarksB.map((point) => (
            <>
              <Placemark
                key={point._id.$oid}
                geometry={[point.location.longitude, point.location.latitude]}
                options={{ iconColor: "#0000FF" }}
              />
            </>
          ))}
        </Map>
      </YMaps>
    </div>
  );
}
