import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Information" {...a11yProps(0)} />
          <Tab label="Appearence" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="">
          <div>
            Profile Photo <br />
            <input type="text" placeholder="Full Name" /> <br />
            <input type="text" placeholder="Headline" className="mt-2" />
            <br />
            <input type="text" placeholder="Email" className="mt-2" />
            <br />
            <input type="text" placeholder="Phone Number" className="mt-2" />
            <br />
            <input type="text" placeholder="Your Website" className="mt-2" />
            <br />
            <input type="text" placeholder="Location" className="mt-2" />{" "}
            <button> My Location</button>
            <br />
            <textarea type="text" placeholder="Summary" className="mt-2" />
            <br />
          </div>
          Profiles
          <br /> Experience
          <br /> Education
          <br /> Skills
          <br /> Projects
          <br /> Seminar
          <br /> Awards
          <br />
          Certifications
          <br /> Language
          <br />
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            ATM Checker
          </button>{" "}
          <br />
          <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Export PDF
          </button>
          <br />
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <label className="block text-sm font-medium mb-2">Font Size</label>
        <select className="w-full border border-gray-300 rounded p-2">
          <option>Small</option>
          <option>Medium</option>
        </select>
        <label className="block text-sm font-medium mb-2">Font Color</label>
        <input
          type="color"
          className="w-full h-10 border border-gray-300 rounded"
        />
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel> */}
    </Box>
  );
}
