// /* eslint-disable no-undef */
// /* eslint-disable react/jsx-key */
// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
// import { useTable, usePagination, useSortBy } from 'react-table';

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [editedUser, setEditedUser] = useState(null);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

//   const fetchData = async () => {
//     try {
//       const res = await fetch(
//         'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json'
//       );

//       if (!res.ok) {
//         throw new Error(`Failed to fetch data. Status: ${res.status}`);
//       }

//       const data = await res.json();

//       if (!Array.isArray(data)) {
//         throw new Error('Data is not an array');
//       }

//       setUsers(data);
//     } catch (error) {
//       console.error('Error fetching or processing data:', error.message);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'Select',
//         accessor: 'select',
//         Cell: ({ row }) => (
//           <input
//             type="checkbox"
//             checked={selectedRows.includes(row.original.id)}
//             onChange={() => toggleRowSelection(row.original.id)}
//           />
//         ),
//       },
//       {
//         Header: 'Name',
//         accessor: 'name',
//       },
//       {
//         Header: 'Email',
//         accessor: 'email',
//       },
//       {
//         Header: 'Role',
//         accessor: 'role',
//       },
//       {
//         Header: 'Actions',
//         accessor: 'actions',
//         Cell: ({ row }) => (
//           <div>
//             <button className='btnedit' onClick={() => handleEditUser(row.original.id)}>Edit</button>
//             <button className='btndte' onClick={() => handleDeleteUser(row.original.id)}>Delete</button>
//           </div>
//         ),
//       },
//     ],
//     [selectedRows]
//   );

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     page,
//     prepareRow,
//     nextPage,
//     previousPage,
//   } = useTable({ columns, data: users }, useSortBy, usePagination);

//   const toggleRowSelection = (userId) => {
//     setSelectedRows((prevSelectedRows) => {
//       if (prevSelectedRows.includes(userId)) {
//         return prevSelectedRows.filter((id) => id !== userId);
//       } else {
//         return [...prevSelectedRows, userId];
//       }
//     });
//   };

//   const handleEditUser = (userId) => {
//     const userToEdit = users.find((user) => user.id === userId);
//     setEditedUser(userToEdit);
//     setIsEditModalOpen(true);
//   };

//   const handleDeleteUser = (userId) => {
//     const userToDelete = users.find((user) => user.id === userId);
//     setEditedUser(userToDelete);
//     setIsDeleteModalOpen(true);
//   };

//   // Add a function to handle closing the edit and delete modals
//   const handleCloseModals = () => {
//     setIsEditModalOpen(false);
//     setIsDeleteModalOpen(false);
//   };

//   return (
//     <div className="container">
//       {/* Table */}
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                   {column.render('Header')}
//                   {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ' ↕️'}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>

//         <tbody {...getTableBodyProps()}>
//           {page.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => (
//                   <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>

//       {/* Buttons */}
//       <div>
//         <button onClick={() => console.log(selectedRows)}>Log Selected Rows</button>
//         <button onClick={previousPage}>Prev</button>
//         <button onClick={nextPage}>Next</button>
//       </div>

//       {/* Add conditional rendering for modals */}
//       {isEditModalOpen && (
//         // Render your edit modal here using the `editedUser` state
//         <div>Edit Modal: {editedUser && editedUser.name}</div>
//       )}

//       {isDeleteModalOpen && (
//         // Render your delete modal here using the `editedUser` state
//         <div>Delete Modal: {editedUser && editedUser.name}</div>
//       )}

//       {/* Add a close button or overlay to close the modals */}
//       <button className='btn' onClick={handleCloseModals}>Close Modals</button>
//     </div>
//   );
// };

// export default App;
