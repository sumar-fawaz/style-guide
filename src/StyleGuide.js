import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Alert } from '@mui/material';
import '../src/index.css'
import { FaRegGem, FaCoins, FaMedal } from 'react-icons/fa';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import '../src/index.css';
import { MobileDatePicker } from '@mui/x-date-pickers';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import Logo from '../src/asset/small logo.png'
const theme = createTheme({
  // ... your theme customization here ...
  palette: {
    primary: {
      main: '#b936ee', // Customize your primary color
    },
    secondary: {
      main: '#3bace2', // Customize your secondary color
    },
    error:{
        main:'#a11017',
    },
    warning:{
        main:'#877c17',
    },
    info:{
        main:'#175a87',
    },
    success:{
        main:'#034008',
    },
    // Add more customized colors here
  },
});

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function StyleGuide() {
  return (
    
    <ThemeProvider theme={theme}>
          <div className="flex items-center">
  <div className="mr-4 m-5 p-6">
    <img src={Logo} alt="logo" />
  </div>
  <div>
    <h1 className="text-3xl font-semibold mb-4 title-style-guide text-gradient">
      Spiralz Style Guide
    </h1>
  </div>
</div>

        <div className='m-5 p-6 '>
          
       
        
        <h2 className="text-xl font-semibold mb-2 text-white">Typography</h2>

        <h1 className='text-left font-semibold mb-4 h1-head text-red-500'>h1 Typography</h1>
        <h2 className='text-left  font-semibold mb-4 h2-head text-red-500'>h2 Typography</h2>
        <h3 className='text-left  font-semibold mb-4 h3-head text-red-500'>h3 Typography</h3>
        <h4 className='text-left  font-semibold mb-4 h4-head text-red-500'>h4 Typography</h4>
        <h5 className='text-left  font-semibold mb-4 h5-head text-red-500'>h5 Typography</h5>
        <h6 className='text-left  font-semibold mb-4 h6-head text-red-500'>h6 Typography</h6>

        <p className='text-paragraph text-blue-500 mb-4'>
          Sample Text
        </p>
        
        <a href='#' className='btn-link text-accent'>Link</a>
        <br/>
        <br/>
        <h2 className="text-xl font-semibold mb-2 text-white">Color Palette</h2>

        <div className="flex space-x-4">

          <div className="w-20 h-20 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-semibold">#406AFF</span>
          </div>
          <div className="w-20 h-20 bg-blue-300 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-semibold">#3BACE2</span>
          </div>
          <div className="w-20 h-20 bg-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-semibold">#B936EE</span>
          </div>
          <div className="w-20 h-20 bg-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-semibold">#FF56F6</span>
          </div>
          <div className="w-20 h-20 bg-black border border-white rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-semibold">#000000</span>
          </div>

        </div>
        </div>
        
        <div className="m-5 my-2 p-6">


            <h2 className="text-xl font-semibold mb-2 text-white">Alert</h2>
            <Alert variant="filled" severity="error">
            This is an error alert — check it out!
            </Alert>
            <br/>
            <Alert variant="filled" severity="warning">
            This is a warning alert — check it out!
            </Alert>
            <br/>
            <Alert variant="filled" severity="info">
            This is an info alert — check it out!
            </Alert>
            <br/>
            <Alert variant="filled" severity="success">
            This is a success alert — check it out!
            </Alert>

{/* Add more customized components here */}
        </div>


        <div className="m-5 p-6">
        <h2 className="text-xl font-semibold mb-2 text-white">Custom Buttons</h2>
        <ButtonGroup className="mb-4" color="primary" variant="contained">
          <Button className="btn btn-hover">Custom Button</Button>
        </ButtonGroup>
        <h4>Tier Buttons</h4>
        <br/>
        <div className="flex space-x-4">
        <CustomButton icon={<FaRegGem />} color="silver">
            <b>Silver</b> 
          </CustomButton>
          <CustomButton icon={<FaCoins />} color="platinum">
            <b>Platinum</b> 
          </CustomButton>
          <CustomButton icon={<FaMedal />} color="gold">
            <b>Gold</b> 
          </CustomButton>
        </div>


    
      </div>
      <div className="m-5 p-6 border-primary border-2 rounded-lg">
  <h2 className="text-xl font-semibold mb-2 text-white">Checkboxes and Radio Buttons</h2>
  <div className='flex space-x-4 align-items-center'> 
    <Checkbox sx={{
                      color: "#406aff",
                      '&.Mui-checked': {
                      color: "primary",
                       },
                     }} 
    label="Checkbox 1" />
    <Checkbox
    sx={{
      color: "#406aff",
      '&.Mui-checked': {
      color: "primary",
       },
     }}
    label="Checkbox 2" />
  </div>
  <RadioButtons 
 
  />
</div>

        
      <div className="m-5 p-6">
        <h2 className="text-xl font-semibold mb-2 text-white">Text Fields</h2>
        <TextField
      sx={{
        "& .MuiInputBase-root": {
            color: 'secondary.main',
            borderColor: 'secondary.main'
        }
      }}
    
      label="Outlined"
      variant="outlined"
      placeholder="TextField"
      focused
      autoComplete='off'
/>

        
      </div>

    {/*<div className='m-5 p-6'>
      <h2 className="text-xl font-semibold mb-2 text-white">Date Picker</h2>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <MobileDatePicker
            renderInput={(params) => (
              <TextField
  variant="outlined"
  label="Outlined"
  placeholder="TextField"
  focused
  InputProps={{
    classes: {
      root: 'custom-input-root', // Custom CSS class for input root
      focused: 'custom-input-focused', // Custom CSS class for input focused state
    },
  }}
/>

            )}
          />
        </LocalizationProvider>
    </div>*/}

    <div className='m-5 p-6'>
      <h2 className="text-xl font-semibold mb-2 text-white">Long Text</h2>
      <LongTextInput
      
      
      />
    </div>

    {/*<div className='m-5 p-6'>
      <h2 className="text-xl font-semibold mb-2 text-white">Height & Weight</h2>
      
      <div className='flex items-center space-x-1'>
      
         <FormHelperText id="outlined-weight-helper-text" className='text-white'>Height</FormHelperText>

          <OutlinedInput
            id="outlined-adornment-height"
            endAdornment={<InputAdornment color='red' position="end">ft</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'height',
            }}

            sx={{
              "& .MuiInputBase-root": {
                  color: 'secondary.main',
                  borderColor: 'secondary.main'
              }
            }}
            focused
            
            
          />

          <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>

        <OutlinedInput
            id="outlined-adornment-weight"
            endAdornment={<InputAdornment position="end">kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
          />

      </div>*
          </div>*/}


        
    </ThemeProvider>
  );
}

const CustomButton = ({ icon, color, children }) => (
    <div className={`text-center ${color}-text`}>
      <Button
        variant="contained"
        className={`bg-${color}-button`}
        style={{ backgroundColor: getColorCode(color) }}
      >
        {icon}
      </Button>
      <p className="mt-1">{children}</p>
    </div>
  );
  
  // Utility function to get color code based on color name
  const getColorCode = (color) => {
    switch (color) {
      case 'silver':
        return 'silver'; // Replace with your desired silver color
      case 'platinum':
        return '#e5e4e2'; // Replace with your desired platinum color
      case 'gold':
        return 'gold'; // Replace with your desired gold color
      default:
        return 'inherit';
    }
  };

  const CheckboxComponent = ({ label }) => (
    <FormControlLabel control={<Checkbox />} label={label} />
  );
  
  const RadioButtons = () => (
    <RadioGroup className='border-primary'>
      <FormControlLabel className='text-white border-primary' value="radio1" control={<Radio 
       sx={{
        '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
            {
                color: '#406AFF',
            },
        '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
            color: 'primary',
        },
    }}
      className='border-primary' />} label="Radio 1" />
      <FormControlLabel className='text-white border-primary' value="radio2" control={<Radio 
       sx={{
        '& .MuiSvgIcon-root:not(.MuiSvgIcon-root ~ .MuiSvgIcon-root)':
            {
                color: '#406AFF',
            },
        '& .MuiSvgIcon-root + .MuiSvgIcon-root': {
            color: 'primary',
        },
    }}
      />} label="Radio 2" />
    </RadioGroup>
  );

 

  
  const DatePickerComponent = () => (
    <DatePicker
        label="Birthdate"
        defaultValue={new Date()}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'red',
                },
                '&:hover fieldset': {
                  borderColor: 'green',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'purple',
                },
              },
            }}
          />
        )}
      />
  );
  
  const LongTextInput = () => (
    <TextField
      multiline
      rows={4}
      variant="outlined"
      label="Long Text Input"
      focused
      placeholder='LongText'
      sx={{
        "& .MuiInputBase-root": {
            color: 'secondary.main',
            borderColor: 'secondary.main'
        }
      }}
    />
  );
  
  const HeightWeightInputs = () => (
    <div>
      <TextField
       variant="outlined" label="Height (cm)" 

      
       />
      <TextField variant="outlined" label="Weight (kg)" />
    </div>
  );

  const ColorDiv = ({ color }) => (
    <div className={`w-20 h-20 ${color} rounded-lg flex items-center justify-center`}>
      <span className="text-black text-sm font-semibold">{color}</span>
    </div>
  );

export default StyleGuide;
