import NavbarFooter from "./Components/NavbarFooter"
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    queryType: "Enquiry",
    fullName: "",
    email: "",
    mobileNumber: "",
    city: "",
    hospital: "",
    specialty: "",
    doctor: "",
    message: "",
    captcha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send to API)
    console.log("Form submitted", formData);
  };

  return (
      <>
          <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-6">
              <h2 className="text-2xl font-semibold text-center mb-6 text-blue-900">
                  Contact Us
              </h2>
              <form onSubmit={handleSubmit}>
                  {/* Type of Query */}
                  <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700">Type of Query</label>
                      <select
                          name="queryType"
                          value={formData.queryType}
                          onChange={handleChange}
                          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                      >
                          <option>Enquiry</option>
                          <option>Complaint</option>
                          <option>Feedback</option>
                      </select>
                  </div>

                  {/* Full Name */}
                  <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700">Full Name*</label>
                      <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                      />
                  </div>

                  {/* Email Id */}
                  <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700">Email Id*</label>
                      <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                      />
                  </div>

                  {/* Mobile Number */}
                  <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700">Mobile Number*</label>
                      <div className="flex">
                          <span className="flex items-center px-3 bg-gray-200 text-gray-600 border-r border-gray-300">+91</span>
                          <input
                              type="tel"
                              name="mobileNumber"
                              value={formData.mobileNumber}
                              onChange={handleChange}
                              required
                              className="w-full p-2 mt-2 border border-gray-300 rounded-md ml-2"
                          />
                      </div>
                  </div>

                  {/* City */}
                  <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700">City</label>
                      <select
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                      >
                          <option>-Select City-</option>
                          <option>Mumbai</option>
                          <option>Delhi</option>
                          <option>Bangalore</option>
                          <option>Kolkata</option>
                          {/* Add other cities */}
                      </select>
                  </div>

                  {/* Hospital */}
                  <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700">Select Hospital</label>
                      <select
                          name="hospital"
                          value={formData.hospital}
                          onChange={handleChange}
                          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                      >
                          <option>-Select Hospital-</option>
                          <option>Apollo Hospital, Delhi</option>
                          <option>Apollo Hospital, Mumbai</option>
                          {/* Add other hospitals */}
                      </select>
                  </div>

                  {/* Specialty */}
                  <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700">Select Specialty</label>
                      <select
                          name="specialty"
                          value={formData.specialty}
                          onChange={handleChange}
                          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                      >
                          <option>-Select Specialty-</option>
                          <option>Cardiology</option>
                          <option>Neurology</option>
                          <option>Orthopedics</option>
                          {/* Add other specialties */}
                      </select>
                  </div>

                  {/* Doctor */}
                  <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700">Select Doctor</label>
                      <select
                          name="doctor"
                          value={formData.doctor}
                          onChange={handleChange}
                          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                      >
                          <option>-Select Doctor-</option>
                          <option>Dr. John Doe</option>
                          <option>Dr. Jane Smith</option>
                          {/* Add other doctors */}
                      </select>
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                      <label className="block text-sm font-semibold text-gray-700">Message*</label>
                      <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="4"
                          className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                      />
                  </div>

                  {/* Captcha */}
                  <div className="mb-4 flex justify-between items-center">
                      <label className="block text-sm font-semibold text-gray-700">Enter Captcha*</label>
                      <div className="flex items-center">
                          <input
                              type="text"
                              name="captcha"
                              value={formData.captcha}
                              onChange={handleChange}
                              required
                              className="w-28 p-2 mt-2 border border-gray-300 rounded-md"
                          />
                          <button
                              type="button"
                              onClick={() => alert("Captcha Refreshed")}
                              className="ml-2 text-blue-600 hover:text-blue-800"
                          >
                              Can't read the image? Click here to refresh
                          </button>
                      </div>
                  </div>

                  {/* Submit Button */}
                  <div className="mb-4 text-center">
                      <button
                          type="submit"
                          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                      >
                          Submit Form
                      </button>
                  </div>
              </form>

              {/* Contact email */}
              <div className="mt-4 text-center text-gray-600">
                  <p>You can also write to us at: <a href="mailto:info@apollohospitals.com" className="text-blue-600">info@apollohospitals.com</a></p>
              </div>
          </div>
          <div>
              <div>
                  <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets/images/contact-image.jpg" alt="" width="494px" />
              </div>
              <div></div>
          </div>
          <NavbarFooter></NavbarFooter>
      </>
  );
};

export default Contact;
