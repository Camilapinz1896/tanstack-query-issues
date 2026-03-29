import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getIssues } from "../actions/getIssues.action";

export const useIssues = () => {
  const issuesQuery = useQuery({
    queryKey: ["issues"],
    queryFn: getIssues,
  });

  return { issuesQuery };
};
