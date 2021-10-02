import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';

const News = (props) => {
    const {urlToImage, title, description} = props.article;
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          
          action={
            <IconButton aria-label="settings">
              
            </IconButton>
          }
          title={title}
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image={urlToImage}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        
        
      </Card>
    );
};

export default News;