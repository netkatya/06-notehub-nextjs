import { fetchNoteById } from "@/lib/api";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";

interface PageProps {
  params: { id: string };
}

const NoteDetails = async ({ params }: PageProps) => {
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
