function RightSideBar() {
  <div className="w-1/5 bg-gray-100 p-4">
    <h2 className="text-lg font-bold mb-4">Information</h2>
    <div className="mb-4">
      Profile Photo <br />
      <input type="text" placeholder="Full Name" />
      <input type="text" placeholder="Headline" className="mt-2" />
      <input type="text" placeholder="Email" className="mt-2" />
      <input type="text" placeholder="Phone Number" className="mt-2" />
      <input type="text" placeholder="Your Website" className="mt-2" />
      <input type="text" placeholder="Location" className="mt-2" />{" "}
      <button>Find My Location</button>
      <textarea type="text" placeholder="Summery" className="mt-2" />
      <label className="block text-sm font-medium mb-2">Font Size</label>
      <select className="w-full border border-gray-300 rounded p-2">
        <option>Small</option>
        <option>Medium</option>
      </select>
    </div>
    Profiles Experience Education Skills Projects Seminar Awards Certifications
    Language
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Font Color</label>
      <input
        type="color"
        className="w-full h-10 border border-gray-300 rounded"
      />
    </div>
    <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
      ATM Checker
    </button>
    <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
      Export PDF
    </button>
    <br />
  </div>;
}
export default RightSideBar;
