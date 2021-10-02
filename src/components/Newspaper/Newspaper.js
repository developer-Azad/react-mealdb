import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const Newspaper = () => {
    const [articles, setArticles] = useState([]);
    console.log(articles);
    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-30&sortBy=publishedAt&apiKey=858b97f485a843f88175a459e29e055e')
        .then(res => res.json())
        .then(data => setArticles(data.articles))
        }, [])
    return (
        <div>
            <h1>This is my first Material UI project</h1>
            <Box sx={{ flexGrow: 1 }}>
             <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
             {
                articles.map(article =>  <Grid item xs={2} sm={4} md={4}>
                    <News article= {article}></News>
                    </Grid>)
            }
            
      </Grid>
    </Box>
            
        </div>
    );
};

export default Newspaper;