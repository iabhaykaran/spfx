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





import * as React from "react";
import "./Styles.css";
import "@pnp/sp/webs";
import "@pnp/sp/folders";
import "@pnp/sp/files";
import "@pnp/sp/sites";
import "@pnp/sp/presets/all";
import "@pnp/sp/site-users/web";
import { SPFI } from "@pnp/sp";
import { IEmployeeCrudProps } from "./IEmployeeCrudProps";
import { getSP } from "../loc/pnpjsConfig";

const EmployeeCrud: React.FC<IEmployeeCrudProps> = () => {
  const sp: SPFI = getSP();

  interface IEmployeeItem {
    Id: number;
    Title: string;
    number: number;
    ImageURL?: string;
  }

  const [items, setItems] = React.useState<IEmployeeItem[]>([]);
  const [title, setTitle] = React.useState("");
  const [score, setScore] = React.useState<number | "">("");
  const [selectedId, setSelectedId] = React.useState<number | null>(null);
  const [imageFile, setImageFile] = React.useState<File | null>(null);

  // New states for modal
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalFileUrl, setModalFileUrl] = React.useState<string | null>(null);
  const [modalFileType, setModalFileType] = React.useState<
    "image" | "pdf" | null
  >(null);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const getData = async () => {
    try {
      const data: IEmployeeItem[] = await sp.web.lists
        .getByTitle("Abhay")
        .items.getAll();
      setItems(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    try {
      const folder = sp.web.getFolderByServerRelativePath(
        "/sites/AlRostmaniSpfx2/AbhayFolder"
      );
      await folder.files.addUsingPath(file.name, file, { Overwrite: true });
      const fileUrl = `/sites/AlRostmaniSpfx2/AbhayFolder/${file.name}`;
      return fileUrl;
    } catch (error) {
      console.error("Image upload failed:", error);
      return null;
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const createItem = async () => {
    if (!title || score === "") {
      alert("Please enter both name and score.");
      return;
    }

    try {
      let imageUrl = "";
      if (imageFile) {
        const uploadedUrl = await uploadImage(imageFile);
        if (uploadedUrl) imageUrl = uploadedUrl;
      }

      await sp.web.lists.getByTitle("Abhay").items.add({
        Title: title,
        number: score,
        ImageURL: imageUrl,
      });

      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      clearForm();
      // eslint-disable-next-line no-void
      void getData();
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleEdit = (item: IEmployeeItem) => {
    setTitle(item.Title);
    setScore(item.number);
    setSelectedId(item.Id);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const updateItem = async () => {
    if (!selectedId || !title || score === "") {
      alert("Please fill all fields.");
      return;
    }

    try {
      let imageUrl = "";
      if (imageFile) {
        const uploadedUrl = await uploadImage(imageFile);
        if (uploadedUrl) imageUrl = uploadedUrl;
      }

      const updateObj: { [key: string]: unknown } = {
        Title: title,
        number: score,
      };

      if (imageUrl) {
        updateObj.ImageURL = imageUrl;
      }

      await sp.web.lists
        .getByTitle("Abhay")
        .items.getById(selectedId)
        .update(updateObj);

      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      clearForm();
      // eslint-disable-next-line no-void
      void getData();
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const deleteItem = async (id: number) => {
    try {
      await sp.web.lists.getByTitle("Abhay").items.getById(id).delete();
      // eslint-disable-next-line no-void
      void getData();
    } catch (error) {
      console.error(`Error deleting item with ID ${id}:`, error);
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const clearForm = () => {
    setTitle("");
    setScore("");
    setSelectedId(null);
    setImageFile(null);
  };

  React.useEffect(() => {
    getData().catch((error) => console.error("Error in useEffect:", error));
  }, []);

  // Helper to get filename from URL
  const getFileNameFromUrl = (url: string): string => {
    return url.split("/").pop() || "";
  };

  // Helper to detect file type for modal
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const openModalWithFile = (fileUrl: string) => {
    const ext = fileUrl.split(".").pop()?.toLowerCase();
    if (!ext) return;

    if (["jpg", "jpeg", "png", "gif", "bmp", "webp"].includes(ext)) {
      setModalFileType("image");
    } else if (ext === "pdf") {
      setModalFileType("pdf");
    } else {
      setModalFileType(null);
    }

    setModalFileUrl(fileUrl);
    setModalOpen(true);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const closeModal = () => {
    setModalOpen(false);
    setModalFileUrl(null);
    setModalFileType(null);
  };

  return (
    <div className="card">
      <div className="form">
        <input
          type="text"
          placeholder="Employee Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) =>
            setScore(e.target.value === "" ? "" : parseInt(e.target.value))
          }
        />
        <br />

        <div>
          <p>Profile Picture / File:</p>
          <input
            type="file"
            className="tp"
            accept="image/*,application/pdf"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          />
        </div>
        {selectedId ? (
          <div>
            <button className="btn" onClick={updateItem}>
              Update Employee
            </button>
            <button className="btn cancel" onClick={clearForm}>
              Cancel
            </button>
          </div>
        ) : (
          <button
            style={{ marginTop: "20px" }}
            className="gbtn"
            onClick={createItem}
          >
            Add Employee
          </button>
        )}
      </div>

      <ul>
        {items.map((item) => (
          <div key={item.Id} className="subcard">
            <div>
              {item.ImageURL && (
                <>
                  {/* Show image preview if image */}
                  {item.ImageURL.match(/\.(jpg|jpeg|png|gif|bmp|webp)$/i) ? (
                    <img
                      src={item.ImageURL}
                      alt={item.Title}
                      style={{
                        width: "250px",
                        height: "250px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  ) : (
                    <p style={{ fontStyle: "bold" }}>
                      File: {getFileNameFromUrl(item.ImageURL)}
                    </p>
                  )}
                  {/* Show filename */}

                  <h2>{item.Title}</h2>
                  <h3 style={{ color: "grey" }}>Score: {item.number}</h3>
                  <p>
                    <b>Filename:</b> {getFileNameFromUrl(item.ImageURL)}
                  </p>
                  <button
                    className="gbtn"
                    onClick={() => openModalWithFile(item.ImageURL)}
                    style={{ marginBottom: "10px" }}
                  >
                    View File
                  </button>
                </>
              )}
             
            </div>
            <div>
              <button className="gbtn" onClick={() => handleEdit(item)}>
                Update
              </button>{" "}
              <button className="btn" onClick={() => deleteItem(item.Id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </ul>

      {/* Modal */}
      {modalOpen && modalFileUrl && (
        <div className="modalOverlay" onClick={closeModal}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="modalCloseBtn" onClick={closeModal}>
              Close
            </button>
            {modalFileType === "image" && (
              <img
                src={modalFileUrl}
                alt="Preview"
                style={{
                  maxWidth: "100%",
                  maxHeight: "80vh",
                  borderRadius: "10px",
                }}
              />
            )}
            {modalFileType === "pdf" && (
              <iframe
                src={modalFileUrl}
                style={{ width: "800px", height: "80vh", border: "none" }}
                title="PDF Preview"
              />
            )}
            {!modalFileType && <p>Cannot preview this file type.</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeCrud;
