import { fetchNoteById } from "@/lib/api";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";

const NoteDetails = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <NoteDetailsClient noteId={id} dehydratedState={dehydrate(queryClient)} />
  );
};

export default NoteDetails;
