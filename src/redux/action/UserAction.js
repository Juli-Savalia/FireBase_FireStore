import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { app } from "../../firebaseconfig";

const db = getFirestore(app);

export const adduser = (data) => {
  return async (dispatch) => {
    try {
      await addDoc(collection(db, "records"), {
        mail: data.mail,
        password: data.password,
      });
      dispatch({
        type: "adduser",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "addusererr",
        payload: err,
      });
    }
  };
};

export const viewUser = () => {
  return async (dispatch) => {
    try {
      const userdata = collection(db, "record");

      const viewrec = await getDocs(userdata);
      console.log(viewrec);

      let users = viewrec.docs.map((val) => ({
        id: val.id,
        ...val.data(),
      }));
      console.log(users);
      // console.log(viewuser);
      dispatch({
        type: "viewuser",
        payload: users,
      });
    } catch (err) {
      dispatch({
        type: "viewusererr",
        payload: err,
      });
    }
  };
};

export const deleteUser = (del) => {
  return async (dispatch) => {
    try {
      const delData = doc(db, "record", del.id);
      await deleteDoc(delData);
      dispatch({
        type: "deleteUser",
        payload: del,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};
