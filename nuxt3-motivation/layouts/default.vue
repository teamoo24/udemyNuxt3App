<template>
    <div>
      <Navbar />
      <slot />
    </div>
</template>


<style>
    .container {
        color: red;
    }

    header {
        background-color: orange;
        color: white;
        text-align: center;
    }

    footer {
        background-color: orange;
        color: white;
        text-align: center;
    }
    

    html {
        font-family: 'Permanent Marker', cursive;
    }
</style>