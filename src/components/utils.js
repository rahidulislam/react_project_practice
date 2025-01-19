export function getImageUrl(person){
    console.log(person)
    return (
        'https://i.imgur.com/'+ person.imageId +'s.jpg'
    )
}