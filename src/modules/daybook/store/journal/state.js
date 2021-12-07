
export default () => ({
    isLoading: true,
    entrie: [
        {
            id: new Date().getTime(), //12123424
            date: new Date().toDateString(), //sat, 24, jul
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellendus asperiores inventore? Nihil laboriosam, sunt optio harum, inventore vitae, dignissimos officia recusandae dicta provident numquam hic? Laudantium maxime dolores animi?',
            picture: null, //https://
        },
        {
            id: new Date().getTime() + 1000, //12123424
            date: new Date().toDateString(), //sat, 24, jul
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo exercitationem fugit architecto corporis necessitatibus mollitia consequuntur quaerat quis, ratione expedita tenetur sapiente veniam earum neque autem, odit rem pariatur doloremque.',
            picture: null, //https://
        },
        {
            id: new Date().getTime() + 2000, //12123424
            date: new Date().toDateString(), //sat, 24, jul
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae cupiditate quam voluptatem totam ex fuga accusantium sapiente enim distinctio, possimus vero voluptate aperiam vel architecto, nemo blanditiis temporibus veritatis laboriosam.',
            picture: null, //https://
        },
    ]
})
