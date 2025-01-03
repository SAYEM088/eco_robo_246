"use client";

import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DataUploader() {
  const [formData, setFormData] = useState({
    testNo: "",
    ph: "",
    ec: "",
    salt: "",
    tds: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/post", formData);
      if (response.data.success) {
        toast.success("Data submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({ testNo: "", ph: "", ec: "", salt: "", tds: "" });
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Failed to submit data. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="bg-gray-800 p-14 text-white h-screen">
      <h2 className="text-red-500 font-bold text-xl mb-4">Uploader</h2>
      <form onSubmit={handleSubmit}>
        {["testNo", "ph", "ec", "salt", "tds"].map((field) => (
          <div key={field} className="mb-4">
            <label className="block text-sm capitalize">{field}</label>
            <input
              type="number"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full p-2 bg-gray-700 text-white rounded"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-red-500 text-white py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
