<template>
<div class="row">
    <div class="col">
<div class="header">
    <div class="card">
        <div class="cardbody">
            <h1>House Page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Veritatis, nisi est quaerat cum odio aspernatur iste velit alias consequuntur cumque! Doloremque quia, 
                quae distinctio quos aliquam nulla dolore atque unde!</p>
        </div>
    </div>
<button>
    list House
</button>    

</div>    
</div>
</div>
</template>

<script>
import houseService from "../services/HouseService.js"
export default {
    name: 'HousePage',
    data() {
        return {
            houses: []
        }
    },
    
        async getHouses() {
            try {
                const res = await houseService.getHouses()
                this.houses = res.data
            } catch (error) {
                console.error(error)
            }
        },
    onMount() {
        this.getHouses()
    }
}
</script>

<style>
</style>