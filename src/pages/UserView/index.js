import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";
import React, {useState, useEffect} from "react"
import { Table} from 'react-bootstrap';


export const UserView = () => {
    const [posts, setPosts] = useState([]);

       
    useEffect( () => { 
        async function fetchData() {
            try {
                const querySnapshot = await getDocs(collection(db, "user"));
                querySnapshot.forEach(doc => {
                    console.log(doc.id, '=>', doc.data());
                    setPosts(querySnapshot.data);
                  });
                return querySnapshot;
                } catch (error) {
                throw Error(error);
                }
        }
        fetchData();
    }, []);
    return <div>{posts}
    <Table responsive>
  
     </Table>
    
    </div>
    
}















//export const UserView = () =>{
//        
//     const [user, setUser] = useState({});
//     const {id} = useParams();
//
//     useEffect(() => {
//         db.child(`users/${id}`)
//         .get()
//         .then((snapshot) => {
//             if(snapshot.exists()) {
//                 setUser({...snapshot.val() });
//             
//             } else {
//                 setUser({});
//                }
//         });
//     }, [id])
//     console.log("user", user);
//        return(
//            <div>
//                Hola amigo
//            </div>
//        )
//    }





//export const UserView= async() =>{
//    try {
//    const querySnapshot = await getDocs(collection(db, "users"));
//    querySnapshot.forEach(doc => {
//        console.log(doc.id, '=>', doc.data());
//      });
//    return querySnapshot;
//    } catch (error) {
//    throw Error(error);
//    }
//    return(
//        <div>
//            Hola amigo
//        </div>
//    )
//}