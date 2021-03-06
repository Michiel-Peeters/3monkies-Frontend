import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const gameAPI = createApi({
  reducerPath: "gameState",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API}/games`,
  }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: () => ({ url: `/`, credentials: "include" }),
      providesTags: ["AllGames"],
    }),
    getGameById: builder.query({
      query: (id) => ({ url: `/${id}`, credentials: "include" }),
    }),
    postGame: builder.mutation({
      query: ({
        user,
        room,
        startDate,
        endDate,
        currentTip,
        seconds,
        active,
      }) => ({
        url: ``,
        method: "POST",
        credentials: "include",
        body: {
          user,
          room,
          startDate,
          endDate,
          currentTip,
          seconds,
          active,
        },
      }),
      invalidatesTags: ["AllGames"],
    }),
    putGame: builder.mutation({
      query: ({
        id,
        user,
        room,
        startDate,
        endDate,
        currentTip,
        seconds,
        active,
      }) => ({
        url: `/${id}`,
        method: "PUT",
        body: {
          user,
          room,
          startDate,
          endDate,
          currentTip,
          seconds,
          active,
        },
      }),
      invalidatesTags: ["AllGames"],
    }),
    patchGame: builder.mutation({
      query: ({ gameId, body }) => ({
        url: `/${gameId}`,
        method: "PATCH",
        credentials: "include",
        headers: {
          accept: "application/json",
          "Content-Type": "application/merge-patch+json",
        },
        body: JSON.stringify(body),
      }),
      invalidatesTags: ["AllGames"],
    }),
    deleteGame: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AllGames"],
    }),
  }),
});

export default gameAPI;
export const {
  useGetGamesQuery,
  useGetGameByIdQuery,
  usePostGameMutation,
  usePutGameMutation,
  usePatchGameMutation,
  useDeleteGameQuery,
} = gameAPI;
