import React, { useState } from "react";

function Donation() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [razorpayPayment, setRazorpayPayment] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !description || !name || !email || !contact) {
      alert("Please fill in all the fields");
    } else if (isNaN(amount)) {
      alert("Amount must be a number");
    } else if (!isValidEmail(email)) {
      alert("Please enter a valid email");
    } else if (!isValidName(name)) {
      alert("Name must contain only letters");
    } else if (!isValidDescription(description)) {
      alert("Description must be a string");
    } else {
      var options = {
        key: "rzp_test_NIqragtJB91N47",
        key_secret: "vDyMAk357F3IHh4TdZ9cDZUb",
        amount: amount * 100,
        currency: "INR",
        name: name,
        description: description,
        handler: function (response) {
          alert(response.razorpay_payment_id);
          setShowModal(true);
        },
        prefill: {
          name: name,
          email: email,
          contact: contact,
        },
        notes: {
          address: "Razorpay Corporate office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var pay = new window.Razorpay(options);
      pay.open();
      setRazorpayPayment(pay);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    if (razorpayPayment) {
      razorpayPayment.close();
    }
    setAmount("");
    setDescription("");
    setName("");
    setEmail("");
    setContact("");
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidName = (name) => {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
  };

  const isValidDescription = (description) => {
    return typeof description === "string";
  };

  return (
    <div style={{        backgroundImage: 
        "url('https://wallpaperaccess.com/full/1353726.jpg')",
           backgroundRepeat: 'repeat-y'}}>
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#f2f2f2",
      padding: "20px",
      borderRadius: "18px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
      maxWidth: "400px",
      margin: "0 auto",
    }}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
<h1 style={{
  fontSize: "24px",
  color: "#d2691e",
  fontWeight: "bold",
//  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  textAlign: "center",
  margin: "20px 0",
}}>
   PAYMENT VIA SEVA KENDRA 
</h1>      <br />
      <form style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }} onSubmit={handleSubmit}>
  <input
    type="text"
    placeholder="Enter Amount"
    style={{
      marginBottom: "10px",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      transition: "border-color 0.3s",
    }}
    value={amount}
    onChange={(e) => setAmount(e.target.value)}
  />
  <input
    type="text"
    placeholder="Enter Description"
    style={{
      marginBottom: "10px",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      transition: "border-color 0.3s",
    }}
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />
  <input
    type="text"
    placeholder="Enter Name"
    style={{
      marginBottom: "10px",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      transition: "border-color 0.3s",
    }}
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
  <input
    type="text"
    placeholder="Enter Email"
    style={{
      marginBottom: "10px",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      transition: "border-color 0.3s",
    }}
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <input
    type="text"
    placeholder="Enter Contact"
    style={{
      marginBottom: "10px",
      padding: "8px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      transition: "border-color 0.3s",
    }}
    value={contact}
    onChange={(e) => setContact(e.target.value)}
  />
  <br />
  <br />
  
        <button
  type="submit"
  style={{
    padding: "10px 20px",
    background: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
    transition: "background 0.3s",
  }}
>
💸 PAY
</button>
      </form>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ background: "#fff", padding: "20px", borderRadius: "4px", maxWidth: "400px", textAlign: "center" }}>
            <h3>Thank you for submitting!</h3>
            <p>Your payment details have been received.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
    </div>
    </div>
  );
}

export default Donation;
