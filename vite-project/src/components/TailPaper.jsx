import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { Box, Paper } from '@mui/material';

export const TailPaper = forwardRef(({ bottom, left, right, sx, children, isPropTrue }, ref) => {
  const [className, setClassName] = useState('speaking-box-tail'); // Initial className

  // Update className based on the value of the prop
  useEffect(() => {
    if (isPropTrue) {
      setClassName('speaking-box-tail2');
    } else {
      setClassName('speaking-box-tail'); // Revert to original className
    }
  }, [isPropTrue]);

  return (
    <Box>
      <Paper
        ref={ref}
        sx={{
          width: '30rem',
          paddingTop:2, paddingLeft:4,
          height: '15rem',
          position: 'absolute',
          left: left,
          opacity: 0,
          transition: 'left 0.5s ease-in, opacity 0.5s ease-in',
          bottom: bottom,
          right:right,
          borderBottom:5,
          backgroundColor:'#19224B',
          borderColor:'white',
          ...sx, // Add the 'sx' prop here
          '@media (max-width: 700px)': {
            width: '60vw',paddingLeft:3,
          },
          '@media (max-width: 400px)': {
            width: '50vw',paddingLeft:2,
          },
        }}
      >
              {children}
        <div className={className}></div> {/* Use the updated className here */}
      </Paper>
    </Box>
  );
});

export default TailPaper;
