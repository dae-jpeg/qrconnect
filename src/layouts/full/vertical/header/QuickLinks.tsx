import { Typography, Stack, Box } from '@mui/material';
import React from 'react';
import * as dropdownData from './data';

const QuickLinks = () => {
  return (
    <>
      <Typography variant="h5">Quick Links</Typography>
      <Stack spacing={2} mt={2}>
        {dropdownData.pageLinks.map((pagelink, index) => (
          <Box key={index} className="hover-text-primary">
            <Typography
              variant="subtitle2"
              color="textPrimary"
              className="text-hover"
              fontWeight={600}
            >
              {pagelink.title}
            </Typography>
          </Box>
        ))}
      </Stack>
    </>
  );
};

export default QuickLinks;
