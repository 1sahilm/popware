
import { storage } from "@/app/firebase/config";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

export const uploadImageToFirebase = async (base64: string, fileName: string): Promise<string> => {
  const storageRef = ref(storage, `custom-images/${fileName}`);
  await uploadString(storageRef, base64, "data_url");
  const downloadURL = await getDownloadURL(storageRef);
  return downloadURL;
};
