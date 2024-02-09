
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Button from '@mui/material/Button';

import scbLogo from '../../assets/scb-logo.png';
import NavBar from "../../components/NavBar/NavBar";
import InterfaceTable from "../../components/InterfaceTable/InterfaceTable";
import Modal from "../../components/InterfaceModal/InterfaceModal";
import AddIcon from '@mui/icons-material/Add';
import { InterfaceReponse, fetchData } from "../../api";

const Dashboard = () => {

    useEffect(() => {
        fetchData();
    }, []);

    const [open, setOpen] = useState(false);
    const [rowData,setRowData] = useState<InterfaceReponse[]>([]);

    const fetchInterfaceData = async () => {
        try {
            const fetchedData = await fetchData(); 
            setRowData(fetchedData); 
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // const rowData = [
    //     { id: 1, name: "Product A", CPU: "Intel Core i5", RAM: "8GB" },
    //     { id: 2, name: "Product B", CPU: "AMD Ryzen 7", RAM: "16GB" },
    //     { id: 3, name: "Product C", CPU: "Intel Core i7", RAM: "32GB" },
    //     { id: 4, name: "Product D", CPU: "Intel Core i3", RAM: "4GB" },
    //     { id: 5, name: "Product E", CPU: "Intel Core i9", RAM: "64GB" },
    //     { id: 6, name: "Product F", CPU: "AMD Ryzen 5", RAM: "8GB" },
    // ];

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <div>
            <NavBar/>
            <div className="container">
                <Button variant="contained" onClick={handleOpen} className="modal-button">
                    Add Interface
                    <AddIcon />
                </Button>
                <Modal open={open} onClose={handleClose}/>
                <InterfaceTable data={rowData}/>
            </div>
        </div>
    );

};

export default Dashboard;
