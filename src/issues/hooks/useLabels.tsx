import React from "react";
import { getLabels } from "../actions/getLabels";
import { useQuery } from "@tanstack/react-query";
import { GithubLabel } from "../interfaces/label.interface";

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ["labels"],
    queryFn: getLabels,
    //staleTime: 1000 * 60 * 60, //1 hora, va a durar una hora sin hacer peticiones nuevas,
    // placeholderData: [
    //   //mientras esta cargando la info, s emuestra este placeholder
    //   {
    //     id: 8625343998,
    //     node_id: "LA_kwDOAJy2Ks8AAAACAhxN_g",
    //     url: "https://api.github.com/repos/facebook/react/labels/Compiler:%20New%20Validation%20Ideas",
    //     name: "Compiler: New Validation Ideas",
    //     color: "f9d0c4",
    //     default: false,
    //   } satisfies GithubLabel,
    // ],
    // initialData: [
    //   //SI se tiene un stale time Esta data se considerará como fresca hasta que pase el tiempo del stale time
    //   {
    //     id: 8625343998,
    //     node_id: "LA_kwDOAJy2Ks8AAAACAhxN_g",
    //     url: "https://api.github.com/repos/facebook/react/labels/Compiler:%20New%20Validation%20Ideas",
    //     name: "Compiler: New Validation Ideas",
    //     color: "f9d0c4",
    //     default: false,
    //   } satisfies GithubLabel,
    // ],
  });

  return {
    labelsQuery,
  };
};
