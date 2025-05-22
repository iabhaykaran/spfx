// import * as React from "react";
// import "./Styles.css";
// import "@pnp/sp/webs";
// import "@pnp/sp/folders";
// import "@pnp/sp/files";
// import "@pnp/sp/sites";
// import "@pnp/sp/presets/all";
// import "@pnp/sp/site-users/web";
// import { SPFI } from "@pnp/sp";
// import { IEmployeeCrudProps } from "./IEmployeeCrudProps";
// import { getSP } from "../loc/pnpjsConfig";

// const EmployeeCrud: React.FC<IEmployeeCrudProps> = () => {
//   const sp: SPFI = getSP();

//   interface IEmployeeItem {
//     Id: number;
//     Title: string;
//     number: number;
//   }

//   const [items, setItems] = React.useState<IEmployeeItem[]>([]);
//   const [title, setTitle] = React.useState("");
//   const [score, setScore] = React.useState<number | "">("");
//   const [selectedId, setSelectedId] = React.useState<number | null>(null);

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const getData = async () => {
//     try {
//       const data = await sp.web.lists.getByTitle("Abhay").items.getAll();
//       setItems(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const createItem = async () => {
//     if (!title || score === "") {
//       alert("Please enter both name and score.");
//       return;
//     }

//     try {
//       await sp.web.lists.getByTitle("Abhay").items.add({
//         Title: title,
//         number: score,
//       });

//       // eslint-disable-next-line @typescript-eslint/no-use-before-define
//       clearForm();
//       // eslint-disable-next-line no-void
//       void getData();
//     } catch (error) {
//       console.error("Error creating item:", error);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const handleEdit = (item: IEmployeeItem) => {
//     setTitle(item.Title);
//     setScore(item.number);
//     setSelectedId(item.Id);
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const updateItem = async () => {
//     if (!selectedId || !title || score === "") {
//       alert("Please fill all fields.");
//       return;
//     }

//     try {
//       await sp.web.lists.getByTitle("Abhay").items.getById(selectedId).update({
//         Title: title,
//         number: score,
//       });

//       // eslint-disable-next-line @typescript-eslint/no-use-before-define
//       clearForm();
//       // eslint-disable-next-line no-void
//       void getData();
//     } catch (error) {
//       console.error("Error updating item:", error);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const deleteItem = async (id: number) => {
//     try {
//       await sp.web.lists.getByTitle("Abhay").items.getById(id).delete();
//       // eslint-disable-next-line no-void
//       void getData();
//     } catch (error) {
//       console.error(`Error deleting item with ID ${id}:`, error);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const clearForm = () => {
//     setTitle("");
//     setScore("");
//     setSelectedId(null);
//   };

//   React.useEffect(() => {
//     getData().catch((error) => console.error("Error in useEffect:", error));
//   }, []);

//   return (
//     <div className="card">
//       <h2>Multiverse Solutions</h2>

//       <div className="form">
//         <input
//           type="text"
//           placeholder="Employee Name"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />

//         <input
//           type="number"
//           placeholder="Score"
//           value={score}
//           onChange={(e) =>
//             setScore(e.target.value === "" ? "" : parseInt(e.target.value))
//           }
//         />

//         {selectedId ? (
//           <div>
//             <button className="btn" onClick={updateItem}>
//               Update Employee
//             </button>
//             <button className="btn cancel" onClick={clearForm}>
//               Cancel
//             </button>
//           </div>

//         ) : (

//             <button className="gbtn" onClick={createItem}>
//             Add Employee
//           </button>
//         )}
//       </div>

//       <ul>
//         {items.map((item) => (
//           <div key={item.Id} className="subcard">
//             <div>
//               <h3>{item.Title}</h3>
//               <p>Score: {item.number}</p>
//             </div>
//             <div>
//               <button className="gbtn" onClick={() => handleEdit(item)}>
//                 Update
//               </button>{" "}
//               <button className="btn" onClick={() => deleteItem(item.Id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EmployeeCrud;

// crud operation code  like create read delte in list -----------------------------------------------
// -
// -
// -----------------------------------------------------------------------------------------------------

// import * as React from "react";
// import "./Styles.css";
// import "@pnp/sp/webs";
// import "@pnp/sp/folders";
// import "@pnp/sp/files";
// import "@pnp/sp/sites";
// import "@pnp/sp/presets/all";
// import "@pnp/sp/site-users/web";
// import { SPFI } from "@pnp/sp";
// import { IEmployeeCrudProps } from "./IEmployeeCrudProps";
// import { getSP } from "../loc/pnpjsConfig";

// const EmployeeCrud: React.FC<IEmployeeCrudProps> = () => {
//   const sp: SPFI = getSP();

//   interface IEmployeeItem {
//     Id: number;
//     Title: string;
//     number: number;
//     ImageURL?: string;
//   }

//   const [items, setItems] = React.useState<IEmployeeItem[]>([]);
//   const [title, setTitle] = React.useState("");
//   const [score, setScore] = React.useState<number | "">("");
//   const [selectedId, setSelectedId] = React.useState<number | null>(null);
//   const [imageFile, setImageFile] = React.useState<File | null>(null);

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const getData = async () => {
//     try {
//       const data: IEmployeeItem[] = await sp.web.lists
//         .getByTitle("Abhay")
//         .items.getAll();
//       setItems(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const uploadImage = async (file: File): Promise<string | null> => {
//     try {
//       const folder = sp.web.getFolderByServerRelativePath(
//         "/sites/AlRostmaniSpfx2/AbhayFolder"
//       );
//       await folder.files.addUsingPath(file.name, file, { Overwrite: true });
//       const fileUrl = `/sites/AlRostmaniSpfx2/AbhayFolder/${file.name}`;
//       return fileUrl;
//     } catch (error) {
//       console.error("Image upload failed:", error);
//       return null;
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const createItem = async () => {
//     if (!title || score === "") {
//       alert("Please enter both name and score.");
//       return;
//     }

//     try {
//       let imageUrl = "";
//       if (imageFile) {
//         const uploadedUrl = await uploadImage(imageFile);
//         if (uploadedUrl) imageUrl = uploadedUrl;
//       }

//       await sp.web.lists.getByTitle("Abhay").items.add({
//         Title: title,
//         number: score,
//         ImageURL: imageUrl,
//       });

//       // eslint-disable-next-line @typescript-eslint/no-use-before-define
//       clearForm();
//       // eslint-disable-next-line no-void
//       void getData();
//     } catch (error) {
//       console.error("Error creating item:", error);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const handleEdit = (item: IEmployeeItem) => {
//     setTitle(item.Title);
//     setScore(item.number);
//     setSelectedId(item.Id);
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const updateItem = async () => {
//     if (!selectedId || !title || score === "") {
//       alert("Please fill all fields.");
//       return;
//     }

//     try {
//       let imageUrl = "";
//       if (imageFile) {
//         const uploadedUrl = await uploadImage(imageFile);
//         if (uploadedUrl) imageUrl = uploadedUrl;
//       }

//       const updateObj: { [key: string]: unknown } = {
//         Title: title,
//         number: score,
//       };

//       if (imageUrl) {
//         updateObj.ImageURL = imageUrl;
//       }

//       await sp.web.lists
//         .getByTitle("Abhay")
//         .items.getById(selectedId)
//         .update(updateObj);

//       // eslint-disable-next-line @typescript-eslint/no-use-before-define
//       clearForm();
//       // eslint-disable-next-line no-void
//       void getData();
//     } catch (error) {
//       console.error("Error updating item:", error);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const deleteItem = async (id: number) => {
//     try {
//       await sp.web.lists.getByTitle("Abhay").items.getById(id).delete();
//       // eslint-disable-next-line no-void
//       void getData();
//     } catch (error) {
//       console.error(`Error deleting item with ID ${id}:`, error);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const clearForm = () => {
//     setTitle("");
//     setScore("");
//     setSelectedId(null);
//     setImageFile(null);
//   };

//   React.useEffect(() => {
//     getData().catch((error) => console.error("Error in useEffect:", error));
//   }, []);

//   return (
//     <div className="card">

//       <div className="form">
//         <input
//           type="text"
//           placeholder="Employee Name"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />
//         <input
//           type="number"
//           placeholder="Score"
//           value={score}
//           onChange={(e) =>
//             setScore(e.target.value === "" ? "" : parseInt(e.target.value))
//           }
//         />
//         <br />

//         <div>

//         <p>Profile Picture:</p>
//         <input
//           type="file"
//           className="tp"
//           accept="image/*"
//           onChange={(e) => setImageFile(e.target.files?.[0] || null)}
//           />
//           </div>
//         {selectedId ? (
//           <div>
//             <button className="btn" onClick={updateItem}>
//               Update Employee
//             </button>
//             <button className="btn cancel" onClick={clearForm}>
//               Cancel
//             </button>
//           </div>
//         ) : (
//           <button
//             style={{ marginTop: "20px" }}
//             className="gbtn"
//             onClick={createItem}
//           >
//             Add Employee
//           </button>
//         )}
//       </div>

//       <ul>
//         {items.map((item) => (
//           <div key={item.Id} className="subcard">
//             <div>
//               {item.ImageURL && (
//                 <img
//                   src={item.ImageURL}
//                   alt={item.Title}
//                   style={{
//                     width: "250px",
//                     height: "250px",
//                     objectFit: "cover",
//                     borderRadius: "10px",
//                   }}
//                 />
//               )}
//               <h2>{item.Title}</h2>
//               <h3 style={{ color: "grey" }}>Score: {item.number}</h3>
//             </div>
//             <div>
//               <button className="gbtn" onClick={() => handleEdit(item)}>
//                 Update
//               </button>{" "}
//               <button className="btn" onClick={() => deleteItem(item.Id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default EmployeeCrud;

// ---------------------------------------------------------------------------------------------------
// ------------------------------------------
// ------------------------
// ---------------------------------------------------------------------------------------------------
// ----------------------------------
// folder image upldoad edit code below

// import * as React from "react";
// import "./Styles.css";
// import "@pnp/sp/webs";
// import "@pnp/sp/folders";
// import "@pnp/sp/files";
// import "@pnp/sp/sites";
// import "@pnp/sp/presets/all";
// import "@pnp/sp/site-users/web";
// import { SPFI } from "@pnp/sp";
// import { IEmployeeCrudProps } from "./IEmployeeCrudProps";
// import { getSP } from "../loc/pnpjsConfig";

// const EmployeeCrud: React.FC<IEmployeeCrudProps> = () => {
//   const sp: SPFI = getSP();

//   interface IEmployeeItem {
//     Id: number;
//     Title: string;
//     number: number;
//     ImageURL?: string;
//   }

//   const [items, setItems] = React.useState<IEmployeeItem[]>([]);
//   const [title, setTitle] = React.useState("");
//   const [score, setScore] = React.useState<number | "">("");
//   const [selectedId, setSelectedId] = React.useState<number | null>(null);
//   const [imageFile, setImageFile] = React.useState<File | null>(null);

//   // New states for modal
//   const [modalOpen, setModalOpen] = React.useState(false);
//   const [modalFileUrl, setModalFileUrl] = React.useState<string | null>(null);
//   const [modalFileType, setModalFileType] = React.useState<
//     "image" | "pdf" | null
//   >(null);

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const getData = async () => {
//     try {
//       const data: IEmployeeItem[] = await sp.web.lists
//         .getByTitle("Abhay")
//         .items.getAll();
//       setItems(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   const uploadImage = async (file: File): Promise<string | null> => {
//     try {
//       const folder = sp.web.getFolderByServerRelativePath(
//         "/sites/AlRostmaniSpfx2/AbhayFolder"
//       );
//       await folder.files.addUsingPath(file.name, file, { Overwrite: true });
//       const fileUrl = `/sites/AlRostmaniSpfx2/AbhayFolder/${file.name}`;
//       return fileUrl;
//     } catch (error) {
//       console.error("Image upload failed:", error);
//       return null;
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const createItem = async () => {
//     if (!title || score === "") {
//       alert("Please enter both name and score.");
//       return;
//     }

//     try {
//       let imageUrl = "";
//       if (imageFile) {
//         const uploadedUrl = await uploadImage(imageFile);
//         if (uploadedUrl) imageUrl = uploadedUrl;
//       }

//       await sp.web.lists.getByTitle("Abhay").items.add({
//         Title: title,
//         number: score,
//         ImageURL: imageUrl,
//       });

//       // eslint-disable-next-line @typescript-eslint/no-use-before-define
//       clearForm();
//       // eslint-disable-next-line no-void
//       void getData();
//     } catch (error) {
//       console.error("Error creating item:", error);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const handleEdit = (item: IEmployeeItem) => {
//     setTitle(item.Title);
//     setScore(item.number);
//     setSelectedId(item.Id);
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const updateItem = async () => {
//     if (!selectedId || !title || score === "") {
//       alert("Please fill all fields.");
//       return;
//     }

//     try {
//       let imageUrl = "";
//       if (imageFile) {
//         const uploadedUrl = await uploadImage(imageFile);
//         if (uploadedUrl) imageUrl = uploadedUrl;
//       }

//       const updateObj: { [key: string]: unknown } = {
//         Title: title,
//         number: score,
//       };

//       if (imageUrl) {
//         updateObj.ImageURL = imageUrl;
//       }

//       await sp.web.lists
//         .getByTitle("Abhay")
//         .items.getById(selectedId)
//         .update(updateObj);

//       // eslint-disable-next-line @typescript-eslint/no-use-before-define
//       clearForm();
//       // eslint-disable-next-line no-void
//       void getData();
//     } catch (error) {
//       console.error("Error updating item:", error);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const deleteItem = async (id: number) => {
//     try {
//       await sp.web.lists.getByTitle("Abhay").items.getById(id).delete();
//       // eslint-disable-next-line no-void
//       void getData();
//     } catch (error) {
//       console.error(`Error deleting item with ID ${id}:`, error);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const clearForm = () => {
//     setTitle("");
//     setScore("");
//     setSelectedId(null);
//     setImageFile(null);
//   };

//   React.useEffect(() => {
//     getData().catch((error) => console.error("Error in useEffect:", error));
//   }, []);

//   // Helper to get filename from URL
//   const getFileNameFromUrl = (url: string): string => {
//     return url.split("/").pop() || "";
//   };

//   // Helper to detect file type for modal
//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const openModalWithFile = (fileUrl: string) => {
//     const ext = fileUrl.split(".").pop()?.toLowerCase();
//     if (!ext) return;

//     if (["jpg", "jpeg", "png", "gif", "bmp", "webp"].includes(ext)) {
//       setModalFileType("image");
//     } else if (ext === "pdf") {
//       setModalFileType("pdf");
//     } else {
//       setModalFileType(null);
//     }

//     setModalFileUrl(fileUrl);
//     setModalOpen(true);
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const closeModal = () => {
//     setModalOpen(false);
//     setModalFileUrl(null);
//     setModalFileType(null);
//   };

//   return (
//     <div className="card">
//       <div className="form">
//         <input
//           type="text"
//           placeholder="Employee Name"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />
//         <input
//           type="number"
//           placeholder="Score"
//           value={score}
//           onChange={(e) =>
//             setScore(e.target.value === "" ? "" : parseInt(e.target.value))
//           }
//         />
//         <br />

//         <div>
//           <p>Profile Picture / File:</p>
//           <input
//             type="file"
//             className="tp"
//             accept="image/*,application/pdf"
//             onChange={(e) => setImageFile(e.target.files?.[0] || null)}
//           />
//         </div>
//         {selectedId ? (
//           <div>
//             <button className="btn" onClick={updateItem}>
//               Update Employee
//             </button>
//             <button className="btn cancel" onClick={clearForm}>
//               Cancel
//             </button>
//           </div>
//         ) : (
//           <button
//             style={{ marginTop: "20px" }}
//             className="gbtn"
//             onClick={createItem}
//           >
//             Add Employee
//           </button>
//         )}
//       </div>

//       <ul>
//         {items.map((item) => (
//           <div key={item.Id} className="subcard">
//             <div>
//               {item.ImageURL && (
//                 <>
//                   {/* Show image preview if image */}
//                   {item.ImageURL.match(/\.(jpg|jpeg|png|gif|bmp|webp)$/i) ? (
//                     <img
//                       src={item.ImageURL}
//                       alt={item.Title}
//                       style={{
//                         width: "250px",
//                         height: "250px",
//                         objectFit: "cover",
//                         borderRadius: "10px",
//                       }}
//                     />
//                   ) : (
//                     <p style={{ fontStyle: "bold" }}>
//                       {/* File: {getFileNameFromUrl(item.ImageURL)} */}
//                     </p>
//                   )}
//                   {/* Show filename */}

//                   <h2>{item.Title}</h2>
//                   <h3 style={{ color: "grey" }}>Score: {item.number}</h3>
//                   <p>
//                     <b>Filename:</b> {getFileNameFromUrl(item.ImageURL)}
//                   </p>
//                   <button
//                     className="gbtn"
//                     onClick={() => openModalWithFile(item.ImageURL)}
//                     style={{ marginBottom: "10px" }}
//                   >
//                     View File
//                   </button>
//                 </>
//               )}

//             </div>
//             <div>
//               <button className="gbtn" onClick={() => handleEdit(item)}>
//                 Update
//               </button>{" "}
//               <button className="btn" onClick={() => deleteItem(item.Id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </ul>

//       {/* Modal */}
//       {modalOpen && modalFileUrl && (
//         <div className="modalOverlay" onClick={closeModal}>
//           <div className="modalContent" onClick={(e) => e.stopPropagation()}>
//             <button className="modalCloseBtn" onClick={closeModal}>
//               Close
//             </button>
//             {modalFileType === "image" && (
//               <img
//                 src={modalFileUrl}
//                 alt="Preview"
//                 style={{
//                   maxWidth: "100%",
//                   maxHeight: "80vh",
//                   borderRadius: "10px",
//                 }}
//               />
//             )}
//             {modalFileType === "pdf" && (
//               <iframe
//                 src={modalFileUrl}
//                 style={{ width: "800px", height: "80vh", border: "none" }}
//                 title="PDF Preview"
//               />
//             )}
//             {!modalFileType && <p>Cannot preview this file type.</p>}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeCrud;

// Documnet Library Permisson Tackle Using React----------------------------------------------
// --------------------------
// --------------
// ----------------------------------------------------

// import * as React from "react";
// import { SPFI, spfi, SPFx } from "@pnp/sp";
// import "@pnp/sp/webs";
// import "@pnp/sp/lists";
// import "@pnp/sp/site-users/web";
// import "@pnp/sp/security";
// import { IEmployeeCrudProps } from "./IEmployeeCrudProps";

// interface IUserPermission {
//   PrincipalId: number;
//   LoginName: string;
//   RoleBindings: string[];
// }

// interface ISuggestion {
//   Id: number;
//   LoginName: string;
//   Title: string;
// }

// const listGuid = "057D3A03-4FB0-4DB0-9EB7-A1225CEF90CD";

// const LibraryPermissionManager: React.FC<IEmployeeCrudProps> = (props) => {
//   const sp: SPFI = React.useMemo(
//     () => spfi().using(SPFx(props.context)),
//     [props.context]
//   );

//   const [permissions, setPermissions] = React.useState<IUserPermission[]>([]);
//   const [newUserLogin, setNewUserLogin] = React.useState("");
//   const [newUserRole, setNewUserRole] = React.useState("Read");
//   const [loading, setLoading] = React.useState(false);
//   const [error, setError] = React.useState<string | null>(null);
//   const [suggestions, setSuggestions] = React.useState<ISuggestion[]>([]);

//   React.useEffect(() => {
//     // eslint-disable-next-line no-void
//     void loadLibraryPermissions();
//   }, []);

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   async function loadLibraryPermissions() {
//     setLoading(true);
//     setError(null);
//     try {
//       const list = sp.web.lists.getById(listGuid);
//       const roleAssignments = await list.roleAssignments.expand(
//         "Member",
//         "RoleDefinitionBindings"
//       )();

//       const perms: IUserPermission[] = [];

//       for (const ra of roleAssignments) {
//         const principalId = ra.PrincipalId;
//         let loginName = "";
//         try {
//           const user = await sp.web.siteUsers.getById(principalId)();
//           loginName = user.LoginName;
//         } catch {
//           loginName = `ID: ${principalId}`;
//         }

//         const roles =
//           (
//             ra as { RoleDefinitionBindings?: { Name: string }[] }
//           ).RoleDefinitionBindings?.map((r) => r.Name) || [];

//         perms.push({
//           PrincipalId: principalId,
//           LoginName: loginName,
//           RoleBindings: roles,
//         });
//       }

//       setPermissions(perms);
//     } catch (err) {
//       console.error(err);
//       setError("Failed to load library permissions.");
//     }

//     setLoading(false);
//   }

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   async function addPermission() {
//     if (!newUserLogin) {
//       alert("Enter a user login.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const list = sp.web.lists.getById(listGuid);

//       await list.breakRoleInheritance(false);

//       const user = await sp.web.siteUsers.getByLoginName(newUserLogin)();
//       const roleDef = await sp.web.roleDefinitions.getByName(newUserRole)();

//       await list.roleAssignments.add(user.Id, roleDef.Id);

//       alert(`Permission '${newUserRole}' added for ${newUserLogin}`);
//       setNewUserLogin("");
//       setSuggestions([]);
//       await loadLibraryPermissions();
//     } catch (err) {
//       console.error(err);
//       setError("Failed to add permission. Check user login and role.");
//     }

//     setLoading(false);
//   }

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   async function removePermission(principalId: number) {
//     setLoading(true);
//     setError(null);

//     try {
//       const list = sp.web.lists.getById(listGuid);

//       await list.roleAssignments.remove(principalId, 0);

//       alert("Permission removed.");
//       await loadLibraryPermissions();
//     } catch (err) {
//       console.error(err);
//       setError("Failed to remove permission.");
//     }

//     setLoading(false);
//   }

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   async function handleUserSearch(text: string) {
//     setNewUserLogin(text);

//     if (text.length < 2) {
//       setSuggestions([]);
//       return;
//     }

//     try {
//       const allUsers = await sp.web.siteUsers();
//       const filtered = allUsers
//         .filter(
//           (u) =>
//             u.LoginName.toLowerCase().includes(text.toLowerCase()) ||
//             (u.Title && u.Title.toLowerCase().includes(text.toLowerCase()))
//         )
//         .slice(0, 5)
//         .map((u) => ({
//           Id: u.Id,
//           LoginName: u.LoginName,
//           Title: u.Title,
//         }));

//       setSuggestions(filtered);
//     } catch (err) {
//       console.error("User suggestion failed:", err);
//     }
//   }

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   function handleSuggestionClick(user: ISuggestion) {
//     setNewUserLogin(user.LoginName);
//     setSuggestions([]);
//   }

//   return (
//     <div>
//       <h2>Library Permission Manager (NewAbhayLibrary)</h2>

//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <h3>Current Permissions:</h3>
//       <table style={{ borderCollapse: "collapse", width: "100%" }}>
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid black", padding: 5 }}>User</th>
//             <th style={{ border: "1px solid black", padding: 5 }}>Roles</th>
//             <th style={{ border: "1px solid black", padding: 5 }}>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {permissions.map((perm) => (
//             <tr key={perm.PrincipalId}>
//               <td style={{ border: "1px solid black", padding: 5 }}>
//                 {perm.LoginName}
//               </td>
//               <td style={{ border: "1px solid black", padding: 5 }}>
//                 {perm.RoleBindings.join(", ")}
//               </td>
//               <td style={{ border: "1px solid black", padding: 5 }}>
//                 <button onClick={() => removePermission(perm.PrincipalId)}>
//                   Remove
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h3 style={{ marginTop: 20 }}>Add New Permission</h3>
//       <div style={{ position: "relative" }}>
//         <input
//           type="text"
//           placeholder="Start typing user name or email..."
//           value={newUserLogin}
//           onChange={(e) => handleUserSearch(e.target.value)}
//           style={{ width: 400 }}
//         />
//         {suggestions.length > 0 && (
//           <ul
//             style={{
//               position: "absolute",
//               backgroundColor: "white",
//               border: "1px solid #ccc",
//               listStyle: "none",
//               padding: 0,
//               margin: 0,
//               width: 400,
//               maxHeight: 150,
//               overflowY: "auto",
//               zIndex: 1000,
//             }}
//           >
//             {suggestions.map((user) => (
//               <li
//                 key={user.Id}
//                 onClick={() => handleSuggestionClick(user)}
//                 style={{
//                   padding: 8,
//                   cursor: "pointer",
//                   borderBottom: "1px solid #eee",
//                 }}
//               >
//                 {user.Title || user.LoginName}
//                 <br />
//                 <small>{user.LoginName}</small>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <select
//         value={newUserRole}
//         onChange={(e) => setNewUserRole(e.target.value)}
//         style={{ marginLeft: 10 }}
//       >
//         <option value="Read">Read</option>
//         <option value="Contribute">Contribute</option>
//         <option value="Edit">Edit</option>
//         <option value="Full Control">Full Control</option>
//       </select>
//       <button onClick={addPermission} style={{ marginLeft: 10 }}>
//         Add
//       </button>
//     </div>
//   );
// };

// export default LibraryPermissionManager;

// Code with remove button ----------------------------------------
// ----------------------------
// ----------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

// import * as React from "react";
// import { SPFI, spfi, SPFx } from "@pnp/sp";
// import "@pnp/sp/webs";
// import "@pnp/sp/lists";
// import "@pnp/sp/site-users/web";
// import "@pnp/sp/security";
// import { IEmployeeCrudProps } from "./IEmployeeCrudProps";

// interface IUserPermission {
//   PrincipalId: number;
//   LoginName: string;
//   RoleBindings: string[];
// }

// interface ISuggestion {
//   Id: number;
//   LoginName: string;
//   Title: string;
// }

// const listGuid = "057D3A03-4FB0-4DB0-9EB7-A1225CEF90CD";

// const LibraryPermissionManager: React.FC<IEmployeeCrudProps> = (props) => {
//   const sp: SPFI = React.useMemo(
//     () => spfi().using(SPFx(props.context)),
//     [props.context]
//   );

//   const [permissions, setPermissions] = React.useState<IUserPermission[]>([]);
//   const [newUserLogin, setNewUserLogin] = React.useState("");
//   const [newUserRole, setNewUserRole] = React.useState("Read");
//   const [loading, setLoading] = React.useState(false);
//   const [error, setError] = React.useState<string | null>(null);
//   const [suggestions, setSuggestions] = React.useState<ISuggestion[]>([]);

//   React.useEffect(() => {
//     // eslint-disable-next-line no-void, @typescript-eslint/no-use-before-define
//     void loadLibraryPermissions();
//   }, []);

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const loadLibraryPermissions = async () => {
//     try {
//       setLoading(true);
//       const list = sp.web.lists.getById(listGuid);
//       const roleAssignments = await list.roleAssignments.expand(
//         "Member",
//         "RoleDefinitionBindings"
//       )();

//       const perms: IUserPermission[] = [];

//       for (const ra of roleAssignments) {
//         const principalId = ra.PrincipalId;
//         let loginName = "";
//         try {
//           const user = await sp.web.siteUsers.getById(principalId)();
//           loginName = user.LoginName;
//         } catch {
//           loginName = `ID: ${principalId}`;
//         }

//         const roles =
//           (
//             ra as { RoleDefinitionBindings?: { Name: string }[] }
//           ).RoleDefinitionBindings?.map((r) => r.Name) || [];

//         perms.push({
//           PrincipalId: principalId,
//           LoginName: loginName,
//           RoleBindings: roles,
//         });
//       }

//       setPermissions(perms);
//     } catch (err) {
//       console.error(err);
//       setError("Failed to load library permissions.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const addPermission = async () => {
//     if (!newUserLogin) {
//       alert("Enter a user login.");
//       return;
//     }

//     try {
//       setLoading(true);
//       const list = sp.web.lists.getById(listGuid);
//       await list.breakRoleInheritance(false);

//       const user = await sp.web.ensureUser(newUserLogin);
//       const roleDef = await sp.web.roleDefinitions.getByName(newUserRole)();

//       await list.roleAssignments.add(user.data.Id, roleDef.Id);

//       alert(`Permission '${newUserRole}' added for ${newUserLogin}`);
//       setNewUserLogin("");
//       setSuggestions([]);
//       // eslint-disable-next-line no-void
//       void loadLibraryPermissions();
//     } catch (err) {
//       console.error(err);
//       setError("Failed to add permission. Check user login and role.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const removePermission = async (principalId: number) => {
//     try {
//       setLoading(true);
//       const list = sp.web.lists.getById(listGuid);
//       await list.roleAssignments.remove(principalId, 0);
//       alert("Permission removed.");
//       // eslint-disable-next-line no-void
//       void loadLibraryPermissions();
//     } catch (err) {
//       console.error(err);
//       setError("Failed to remove permission.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const handleUserSearch = async (text: string) => {
//     setNewUserLogin(text);
//     if (text.length < 2) {
//       setSuggestions([]);
//       return;
//     }

//     try {
//       const allUsers = await sp.web.siteUsers();
//       const filtered = allUsers
//         .filter(
//           (u) =>
//             u.LoginName.toLowerCase().includes(text.toLowerCase()) ||
//             (u.Title && u.Title.toLowerCase().includes(text.toLowerCase()))
//         )
//         .slice(0, 5)
//         .map((u) => ({
//           Id: u.Id,
//           LoginName: u.LoginName,
//           Title: u.Title,
//         }));

//       setSuggestions(filtered);
//     } catch (err) {
//       console.error("User search failed:", err);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const handleSuggestionClick = (user: ISuggestion) => {
//     setNewUserLogin(user.LoginName);
//     setSuggestions([]);
//   };

//   return (
//     <div>
//       <h2>Library Permission Manager (NewAbhayLibrary)</h2>

//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <h3>Current Permissions:</h3>
//       <table style={{ borderCollapse: "collapse", width: "100%" }}>
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid black", padding: 5 }}>User</th>
//             <th style={{ border: "1px solid black", padding: 5 }}>Roles</th>
//             <th style={{ border: "1px solid black", padding: 5 }}>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {permissions.map((perm) => (
//             <tr key={perm.PrincipalId}>
//               <td style={{ border: "1px solid black", padding: 5 }}>
//                 {perm.LoginName}
//               </td>
//               <td style={{ border: "1px solid black", padding: 5 }}>
//                 {perm.RoleBindings.join(", ")}
//               </td>
//               {/* <td style={{ border: "1px solid black", padding: 5 }}>
//                 <button onClick={() => removePermission(perm.PrincipalId)}>
//                   Remove
//                 </button>
//               </td> */}

//               <td
//                 style={{
//                   border: "1px solid black",
//                   padding: 5,
//                   position: "relative",
//                 }}
//               >
//                 <div
//                   style={{
//                     cursor: "pointer",
//                     padding: "4px",
//                     display: "inline-block",
//                   }}
//                   onMouseEnter={(e) => {
//                     const menu = e.currentTarget
//                       .nextElementSibling as HTMLElement;
//                     if (menu) menu.style.display = "block";
//                   }}
//                   onMouseLeave={(e) => {
//                     const menu = e.currentTarget
//                       .nextElementSibling as HTMLElement;
//                     if (menu) menu.style.display = "none";
//                   }}
//                 >
//                   &#8942; {/* Unicode for vertical dots */}
//                 </div>
//                 <div
//                   style={{
//                     display: "none",
//                     position: "absolute",
//                     background: "#fff",
//                     border: "1px solid #ccc",
//                     boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
//                     zIndex: 1000,
//                     padding: 4,
//                     right: 0,
//                   }}
//                   onMouseEnter={(e) =>
//                     (e.currentTarget.style.display = "block")
//                   }
//                   onMouseLeave={(e) => (e.currentTarget.style.display = "none")}
//                 >
//                   <button
//                     style={{
//                       display: "block",
//                       width: "100%",
//                       padding: "4px 8px",
//                       border: "none",
//                       background: "none",
//                     }}
//                     onClick={() => alert("Edit feature coming soon")}
//                   >
//                     Edit/Update
//                   </button>
//                   <button
//                     style={{
//                       display: "block",
//                       width: "100%",
//                       padding: "4px 8px",
//                       border: "none",
//                       background: "none",
//                       color: "red",
//                     }}
//                     onClick={() => removePermission(perm.PrincipalId)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h3 style={{ marginTop: 20 }}>Add New Permission</h3>
//       <div style={{ position: "relative" }}>
//         <input
//           type="text"
//           placeholder="Start typing user name or email..."
//           value={newUserLogin}
//           onChange={(e) => handleUserSearch(e.target.value)}
//           style={{ width: 400 }}
//         />
//         {suggestions.length > 0 && (
//           <ul
//             style={{
//               position: "absolute",
//               backgroundColor: "white",
//               border: "1px solid #ccc",
//               listStyle: "none",
//               padding: 0,
//               margin: 0,
//               width: 400,
//               maxHeight: 150,
//               overflowY: "auto",
//               zIndex: 1000,
//             }}
//           >
//             {suggestions.map((user) => (
//               <li
//                 key={user.Id}
//                 onClick={() => handleSuggestionClick(user)}
//                 style={{
//                   padding: 8,
//                   cursor: "pointer",
//                   borderBottom: "1px solid #eee",
//                 }}
//               >
//                 {user.Title || user.LoginName}
//                 <br />
//                 <small>{user.LoginName}</small>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <select
//         value={newUserRole}
//         onChange={(e) => setNewUserRole(e.target.value)}
//         style={{ marginLeft: 10 }}
//       >
//         <option value="Read">Read</option>
//         <option value="Contribute">Contribute</option>
//         <option value="Edit">Edit</option>
//         <option value="Full Control">Full Control</option>
//       </select>
//       <button onClick={addPermission} style={{ marginLeft: 10 }}>
//         Add
//       </button>
//     </div>
//   );
// };

// export default LibraryPermissionManager;

// Three dot action code below permission changing  -------------------------------------------
// ---------------
// -----------------------------
// -------------------------------------------------

// import * as React from "react";
// import { SPFI, spfi, SPFx } from "@pnp/sp";
// import "@pnp/sp/webs";
// import "@pnp/sp/lists";
// import "@pnp/sp/site-users/web";
// import "@pnp/sp/security";
// import { IEmployeeCrudProps } from "./IEmployeeCrudProps";

// interface IUserPermission {
//   PrincipalId: number;
//   LoginName: string; // the login name (e.g. user@domain.com)
//   DisplayName: string; // user's display name (e.g. Abhay Tiwari)
//   RoleBindings: string[];

//   Email: string;
// }

// interface ISuggestion {
//   Id: number;
//   LoginName: string;
//   Title: string;
// }

// const listGuid = "057D3A03-4FB0-4DB0-9EB7-A1225CEF90CD";

// const LibraryPermissionManager: React.FC<IEmployeeCrudProps> = (props) => {
//   const sp: SPFI = React.useMemo(
//     () => spfi().using(SPFx(props.context)),
//     [props.context]
//   );

//   const [permissions, setPermissions] = React.useState<IUserPermission[]>([]);
//   const [newUserLogin, setNewUserLogin] = React.useState("");
//   const [newUserRole, setNewUserRole] = React.useState("Read");
//   const [loading, setLoading] = React.useState(false);
//   const [error, setError] = React.useState<string | null>(null);
//   const [suggestions, setSuggestions] = React.useState<ISuggestion[]>([]);
//   const [hoverId, setHoverId] = React.useState<number | null>(null);

//   React.useEffect(() => {
//     // eslint-disable-next-line no-void
//     void loadLibraryPermissions();
//   }, []);

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   async function loadLibraryPermissions() {
//     setLoading(true);
//     setError(null);
//     try {
//       const list = sp.web.lists.getById(listGuid);
//       const roleAssignments = await list.roleAssignments.expand(
//         "Member",
//         "RoleDefinitionBindings"
//       )();

//       const perms: IUserPermission[] = [];

//       for (const ra of roleAssignments) {
//         const principalId = ra.PrincipalId;
//         let loginName = "";
//         let displayName = "";
//         let email = "";

//         try {
//           const user = await sp.web.siteUsers.getById(principalId)();
//           loginName = user.LoginName;
//           displayName = user.Title || user.LoginName; // Title is the display name
//           email = user.Email || "";
//         } catch {
//           loginName = `ID: ${principalId}`;
//           displayName = loginName;
//           email = "";
//         }

//         const roles =
//           (
//             ra as { RoleDefinitionBindings?: { Name: string }[] }
//           ).RoleDefinitionBindings?.map((r) => r.Name) || [];

//         perms.push({
//           PrincipalId: principalId,
//           LoginName: loginName,
//           DisplayName: displayName,
//           RoleBindings: roles,
//           Email: email,
//         });
//       }
//       setPermissions(perms);
//     } catch (err) {
//       console.error(err);
//       setError("Failed to load library permissions.");
//     }

//     setLoading(false);
//   }

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   async function addPermission() {
//     if (!newUserLogin) {
//       alert("Enter a user login.");
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const list = sp.web.lists.getById(listGuid);
//       await list.breakRoleInheritance(false);
//       const user = await sp.web.siteUsers.getByLoginName(newUserLogin)();
//       const roleDef = await sp.web.roleDefinitions.getByName(newUserRole)();
//       await list.roleAssignments.add(user.Id, roleDef.Id);
//       alert(`Permission '${newUserRole}' added for ${newUserLogin}`);
//       setNewUserLogin("");
//       setSuggestions([]);
//       await loadLibraryPermissions();
//     } catch (err) {
//       console.error(err);
//       setError("Failed to add permission. Check user login and role.");
//     }

//     setLoading(false);
//   }

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   async function removePermission(principalId: number) {
//     setLoading(true);
//     setError(null);

//     try {
//       const list = sp.web.lists.getById(listGuid);
//       await list.roleAssignments.remove(principalId, 0);
//       alert("Permission removed.");
//       await loadLibraryPermissions();
//     } catch (err) {
//       console.error(err);
//       setError("Failed to remove permission.");
//     }

//     setLoading(false);
//   }

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   async function handleUserSearch(text: string) {
//     setNewUserLogin(text);
//     if (text.length < 2) {
//       setSuggestions([]);
//       return;
//     }

//     try {
//       const allUsers = await sp.web.siteUsers();
//       const filtered = allUsers
//         .filter(
//           (u) =>
//             u.LoginName.toLowerCase().includes(text.toLowerCase()) ||
//             (u.Title && u.Title.toLowerCase().includes(text.toLowerCase()))
//         )
//         .slice(0, 5)
//         .map((u) => ({
//           Id: u.Id,
//           LoginName: u.LoginName,
//           Title: u.Title,
//         }));

//       setSuggestions(filtered);
//     } catch (err) {
//       console.error("User suggestion failed:", err);
//     }
//   }

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   function handleSuggestionClick(user: ISuggestion) {
//     setNewUserLogin(user.LoginName);
//     setSuggestions([]);
//   }

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   function handleEditClick(permission: IUserPermission) {
//     const newRole = prompt(
//       "Enter new role (Read, Contribute, Edit, Full Control):",
//       permission.RoleBindings[0]
//     );
//     if (!newRole) return;
//     alert(
//       `TODO: Implement update to role "${newRole}" for ${permission.LoginName}`
//     );
//     // Implement actual update logic here if needed
//   }

//   return (
//     <div>
//       <h2>Library Permission Manager (NewAbhayLibrary)</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}

//       <h3>Current Permissions:</h3>
//       <table style={{ borderCollapse: "collapse", width: "100%" }}>
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid black", padding: 5 }}>User</th>
//             <th style={{ border: "1px solid black", padding: 5 }}>Roles</th>
//             <th style={{ border: "1px solid black", padding: 5 }}>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {permissions.map((perm) => (
//             <tr key={perm.PrincipalId}>
//               <td style={{ border: "1px solid black", padding: 5 }}>
//                 <h3>{perm.DisplayName}</h3>
//                 <p style={{ color: "blue" }}>{perm.Email}</p>
//                 {/*  {perm.LoginName} */}
//               </td>
//               <td style={{ border: "1px solid black", padding: 5 }}>
//                 {perm.RoleBindings.join(", ")}
//               </td>
//               <td
//                 style={{
//                   border: "1px solid black",
//                   padding: 5,
//                   position: "relative",
//                 }}
//                 onMouseEnter={() => setHoverId(perm.PrincipalId)}
//                 onMouseLeave={() => setHoverId(null)}
//               >
//                 <button>⋯</button>
//                 {hoverId === perm.PrincipalId && (
//                   <div
//                     style={{
//                       position: "absolute",
//                       backgroundColor: "#fff",
//                       border: "1px solid #ccc",
//                       boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
//                       padding: 5,
//                       width: "100px",
//                       zIndex: 10,
//                     }}
//                   >
//                     <button
//                       onClick={() => handleEditClick(perm)}
//                       style={{ display: "block", marginBottom: 5 }}
//                     >
//                       Update Role
//                     </button>
//                     <button onClick={() => removePermission(perm.PrincipalId)}>
//                       Delete
//                     </button>
//                   </div>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <h3 style={{ marginTop: 20 }}>Add New Permission</h3>
//       <div style={{ position: "relative" }}>
//         <input
//           type="text"
//           placeholder="Start typing user name or email..."
//           value={newUserLogin}
//           onChange={(e) => handleUserSearch(e.target.value)}
//           style={{ width: 400 }}
//         />
//         {suggestions.length > 0 && (
//           <ul
//             style={{
//               position: "absolute",
//               backgroundColor: "white",
//               border: "1px solid #ccc",
//               listStyle: "none",
//               padding: 0,
//               margin: 0,
//               width: 400,
//               maxHeight: 150,
//               overflowY: "auto",
//               zIndex: 1000,
//             }}
//           >
//             {suggestions.map((user) => (
//               <li
//                 key={user.Id}
//                 onClick={() => handleSuggestionClick(user)}
//                 style={{
//                   padding: 8,
//                   cursor: "pointer",
//                   borderBottom: "1px solid #eee",
//                 }}
//               >
//                 <h3> {user.Title}</h3>
//                 {/* {user.Title || user.LoginName} */}

//                 <p style={{ color: "blue" }}>{user.LoginName}</p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>

//       <select
//         value={newUserRole}
//         onChange={(e) => setNewUserRole(e.target.value)}
//         style={{ marginLeft: 10 }}
//       >
//         <option value="Read">Read</option>
//         <option value="Contribute">Contribute</option>
//         <option value="Edit">Edit</option>
//         <option value="Full Control">Full Control</option>
//       </select>
//       <button onClick={addPermission} style={{ marginLeft: 10 }}>
//         Add
//       </button>
//     </div>
//   );
// };

// export default LibraryPermissionManager;

// lookup coulmn implements site code -----------------
// --------------
// ---------------------

// import * as React from "react";
// import { SPFI, spfi, SPFx } from "@pnp/sp";
// import "@pnp/sp/webs";
// import "@pnp/sp/lists";
// import "@pnp/sp/items";
// import "@pnp/sp/items/get-all";
// import "@pnp/sp/fields";
// import { IEmployeeCrudProps } from "./IEmployeeCrudProps";

// interface IStudent {
//   Id: number;
//   Title: string;
//   Tutorial: {
//     Id: number;
//     Title: string;
//   };
// }

// interface ICollege {
//   Id: number;
//   Title: string;
// }

// const AbhayStudentListManager: React.FC<IEmployeeCrudProps> = (props) => {
//   const sp: SPFI = React.useMemo(
//     () => spfi().using(SPFx(props.context)),
//     [props.context]
//   );

//   const [students, setStudents] = React.useState<IStudent[]>([]);
//   const [colleges, setColleges] = React.useState<ICollege[]>([]);
//   const [newStudentName, setNewStudentName] = React.useState("");
//   const [selectedTutorialId, setSelectedTutorialId] = React.useState<
//     number | null
//   >(null);
//   const [loading, setLoading] = React.useState(false);

//   React.useEffect(() => {
//     // eslint-disable-next-line no-void, @typescript-eslint/no-use-before-define
//     void loadStudents();
//     // eslint-disable-next-line no-void, @typescript-eslint/no-use-before-define
//     void loadColleges();
//   }, []);

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const loadStudents = async () => {
//     setLoading(true);
//     try {
//       const items: unknown[] = await sp.web.lists
//         .getByTitle("AbhayStudentList")
//         .items.expand("Tutorials")
//         .select("Id", "Title", "Tutorials/Id", "Tutorials/Title")();

//       const formatted: IStudent[] = items.map((item) => {
//         const typedItem = item as {
//           Id: number;
//           Title: string;
//           Tutorials: { Id: number; Title: string };
//         };
//         return {
//           Id: typedItem.Id,
//           Title: typedItem.Title,
//           Tutorial: typedItem.Tutorials,
//         };
//       });

//       setStudents(formatted);
//     } catch (error) {
//       console.error("Error loading students", error);
//     }
//     setLoading(false);
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const loadColleges = async () => {
//     try {
//       const items: unknown[] = await sp.web.lists
//         .getByTitle("AbhayCollegeList")
//         .items.select("Id", "Title")();

//       setColleges(items as ICollege[]);
//     } catch (error) {
//       console.error("Error loading colleges", error);
//     }
//   };

//   // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
//   const handleAddStudent = async () => {
//     if (!newStudentName || !selectedTutorialId) {
//       alert("Please enter a name and select a tutorial.");
//       return;
//     }

//     try {
//       const added = await sp.web.lists
//         .getByTitle("AbhayStudentList")
//         .items.add({
//           Title: newStudentName,
//           TutorialsId: selectedTutorialId,
//         });

//       console.log("Student added:", added);
//       alert("Student added successfully!");

//       setNewStudentName("");
//       setSelectedTutorialId(null);
//       await loadStudents();
//     } catch (error) {
//       console.error("Error adding student", error);
//       alert("Error while adding student. See console.");
//     }
//   };

//   return (
//     <div>
//       <h2>Student List</h2>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <table style={{ borderCollapse: "collapse", width: "100%" }}>
//           <thead>
//             <tr>
//               <th style={{ border: "1px solid #ccc", padding: 8 }}>Name</th>
//               <th style={{ border: "1px solid #ccc", padding: 8 }}>Tutorial</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => (
//               <tr key={student.Id}>
//                 <td style={{ border: "1px solid #ccc", padding: 8 }}>
//                   {student.Title}
//                 </td>
//                 <td style={{ border: "1px solid #ccc", padding: 8 }}>
//                   {student.Tutorial?.Title || "N/A"}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       <h3 style={{ marginTop: 20 }}>Add New Student</h3>
//       <input
//         type="text"
//         value={newStudentName}
//         placeholder="Student Name"
//         onChange={(e) => setNewStudentName(e.target.value)}
//         style={{ marginRight: 10 }}
//       />
//       <select
//         value={selectedTutorialId || ""}
//         onChange={(e) => setSelectedTutorialId(Number(e.target.value))}
//       >
//         <option value="">Select Tutorial</option>
//         {colleges.map((college) => (
//           <option key={college.Id} value={college.Id}>
//             {college.Title}
//           </option>
//         ))}
//       </select>
//       <button onClick={handleAddStudent} style={{ marginLeft: 10 }}>
//         Add
//       </button>
//     </div>
//   );
// };

// export default AbhayStudentListManager;

// lookup with existing site users also show their suggestion after typing names charachter
// --------------
// --------------
// --------------
// -----------------------------------------------------------------

import * as React from "react";
import { SPFI, spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import "@pnp/sp/site-users/web";
import "./Styles.css";
import { IEmployeeCrudProps } from "./IEmployeeCrudProps";

interface IStudent {
  Id: number;
  Title: string;
  Tutorial: {
    Id: number;
    Title: string;
  };
}

interface ICollege {
  Id: number;
  Title: string;
}

interface IUser {
  Id: number;
  Title: string; // Display Name
  Email: string;
}

const AbhayStudentListManager: React.FC<IEmployeeCrudProps> = (props) => {
  const sp: SPFI = React.useMemo(
    () => spfi().using(SPFx(props.context)),
    [props.context]
  );

  const [students, setStudents] = React.useState<IStudent[]>([]);
  const [colleges, setColleges] = React.useState<ICollege[]>([]);

  const [users, setUsers] = React.useState<IUser[]>([]);
  const [filteredUsers, setFilteredUsers] = React.useState<IUser[]>([]);
  const [newStudentName, setNewStudentName] = React.useState("");
  const [selectedUser, setSelectedUser] = React.useState<IUser | null>(null);

  const [selectedTutorialId, setSelectedTutorialId] = React.useState<
    number | null
  >(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    void loadStudents();
    void loadColleges();
    void loadUsers();
  }, []);

  const loadStudents = async () => {
    setLoading(true);
    try {
      const items: unknown[] = await sp.web.lists
        .getByTitle("AbhayStudentList")
        .items.expand("Tutorials")
        .select("Id", "Title", "Tutorials/Id", "Tutorials/Title")();

      const formatted: IStudent[] = items.map((item) => {
        const typedItem = item as {
          Id: number;
          Title: string;
          Tutorials: { Id: number; Title: string };
        };
        return {
          Id: typedItem.Id,
          Title: typedItem.Title,
          Tutorial: typedItem.Tutorials,
        };
      });

      setStudents(formatted);
    } catch (error) {
      console.error("Error loading students", error);
    }
    setLoading(false);
  };

  const loadColleges = async () => {
    try {
      const items: unknown[] = await sp.web.lists
        .getByTitle("AbhayCollegeList")
        .items.select("Id", "Title")();

      setColleges(items as ICollege[]);
    } catch (error) {
      console.error("Error loading colleges", error);
    }
  };

  const loadUsers = async () => {
    try {
      const siteUsers = await sp.web.siteUsers();
      setUsers(siteUsers as IUser[]);
    } catch (error) {
      console.error("Error loading users", error);
    }
  };

  // Filter users as suggestions based on input
  const handleStudentNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewStudentName(value);
    setSelectedUser(null);

    if (value.length === 0) {
      setFilteredUsers([]);
      return;
    }

    const filtered = users.filter(
      (user) =>
        user.Title.toLowerCase().includes(value.toLowerCase()) ||
        user.Email.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredUsers(filtered.slice(0, 5)); // limit suggestions to 5
  };

  const handleUserSelect = (user: IUser) => {
    setNewStudentName(user.Title);
    setSelectedUser(user);
    setFilteredUsers([]);
  };

  const handleAddStudent = async () => {
    if (!newStudentName || !selectedTutorialId) {
      alert("Please enter a name and select a tutorial.");
      return;
    }

    try {
      // Add only Title and TutorialsId — no email stored
      await sp.web.lists.getByTitle("AbhayStudentList").items.add({
        Title: newStudentName,
        TutorialsId: selectedTutorialId,
      });

      alert("Student added successfully!");

      setNewStudentName("");
      setSelectedUser(null);
      setSelectedTutorialId(null);
      setFilteredUsers([]);
      await loadStudents();
    } catch (error) {
      console.error("Error adding student", error);
      alert("Error while adding student. See console.");
    }
  };

  const handleDeleteStudent = async (studentId: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );
    if (!confirmDelete) return;

    try {
      await sp.web.lists
        .getByTitle("AbhayStudentList")
        .items.getById(studentId)
        .delete();
      alert("Student deleted successfully.");
      await loadStudents(); // Refresh the list
    } catch (error) {
      console.error("Error deleting student", error);
      alert("Failed to delete student. See console for details.");
    }
  };

  return (
    <div>
      <h2>Manager List</h2>
      <br />

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table
          className="card"
          style={{ borderCollapse: "collapse", width: "100%" }}
        >
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>Manager </th>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>
                Department
              </th>
              <th style={{ border: "1px solid #ccc", padding: 8 }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.Id}>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>
                  {student.Title}
                </td>
                <td style={{ border: "1px solid #ccc", padding: 8 }}>
                  {student.Tutorial?.Title || "N/A"}
                </td>

                <td style={{ border: "1px solid #ccc", padding: 8 }}>
                  <button
                    onClick={() => handleDeleteStudent(student.Id)}
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3 style={{ marginTop: 20 }}>Add Manager</h3>
      <input
        type="text"
        value={newStudentName}
        placeholder="Student Name"
        onChange={handleStudentNameChange}
        style={{ marginRight: 10 }}
        autoComplete="off"
      />
      {/* Suggestions dropdown */}
      {filteredUsers.length > 0 && (
        <ul
          style={{
            border: "1px solid #ccc",
            maxHeight: 120,
            overflowY: "auto",
            margin: 0,
            padding: "0 10px",
            listStyle: "none",
            width: 300,
            background: "white",
            position: "absolute",
            zIndex: 10,
          }}
        >
          {filteredUsers.map((user) => (
            <li
              key={user.Id}
              onClick={() => handleUserSelect(user)}
              style={{ cursor: "pointer", padding: 4 }}
            >
              <h3>{user.Title}</h3>
              <br />
              <p style={{ color: "blue" }}>({user.Email})</p>
            </li>
          ))}
        </ul>
      )}

      <select
        value={selectedTutorialId || ""}
        onChange={(e) => setSelectedTutorialId(Number(e.target.value))}
        style={{ marginLeft: 10 }}
      >
        <option value="">Select Tutorial</option>
        {colleges.map((college) => (
          <option key={college.Id} value={college.Id}>
            {college.Title}
          </option>
        ))}
      </select>

      <button onClick={handleAddStudent} style={{ marginLeft: 10 }}>
        Add
      </button>
    </div>
  );
};

export default AbhayStudentListManager;
