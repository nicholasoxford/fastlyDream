<template>
    <img :src="url" />
  </template>
  
  <script>
  export default {
    props: ['url'],
  }
  </script>
  
  <style>
  img {
    max-height: inherit;
    max-width: 300px;
  }
  a {
    text-decoration: none;
  }
  </style>
  