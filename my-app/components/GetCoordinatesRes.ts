
import axios, { AxiosResponse } from "axios";
export type getAllCoordinatesRes = {
    pvz: coordinateObjEntitySearch[];
    currentPage: number;
  };
  
 export interface coordinateObjEntitySearch {
    location: {
      address: string;
      city: string;
      city_code: number;
      country_code: string;
      fiasCode: string;
      fullAddress: string;
      latitude: string;
      longitude: string;
      postal_code: string;
      region: string;
      region_code: 7;
    };
    name: string;
    phone: string[];
    pics: string[];
    workedTime: string;
    _id: string;
  }
  
export  interface coordinateObjEntity {
    geometry: {
      coordinates: [number, number];
      type: string;
    };
    id: string;
    properties: {
      description: string;
      name: string;
    };
    type: string;
    get: any;
  }

  export async function GetAllCoordinatesRes(){
    const data: AxiosResponse<string, any> = await axios.get<string>(
      "http://81.200.152.89/api/pvz/coordinatOnly?tileNumber=41.1704,0.0000,66.6535,11.2500&callback=id_1694113894655986145610"
    );
    return data
  }