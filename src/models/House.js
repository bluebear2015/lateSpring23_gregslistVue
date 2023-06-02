export class House {
    constructor(data) {
        this.id = data.id
        this.bathrooms = data.bathrooms
        this.bedrooms = data.bedrooms
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
       
        this.createdAt = new Date(data.createdAt)
        this.creatorId = data.creatorId
        

    }
}
