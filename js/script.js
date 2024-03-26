const { createApp } = Vue;

createApp({
    data() {
        return {
            message: "Secondo il Time la persona dell'anno è: Taylor Swift",
            image: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/KUQN5M3L6FSH5HQLEOX4UO7DSU.JPG&w=1200"
        };
    }
}).mount('#app');