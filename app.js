const paragraphElement = document.createElement("p");
paragraphElement.innerText = "Mis iganes siin võiks olla.";

const wrapper = document.querySelector(".wrapper");
wrapper.appendChild(paragraphElement);

const students = [
    {
        _id: "6581529f97add8b0f3ced7ca",
        isActive: true,
        picture: "http://placehold.it/32x32",
        age: 33,
        name: "Fanny Donovan",
        gender: "female",
        email: "fannydonovan@rodeocean.com",
        phone: "+372 (880) 573-2939",
        address: "133 Dumont Avenue, Cutter, Louisiana, 267",
        about: "Reprehenderit magna laborum sint dolore cupidatat cupidatat ut nulla nostrud nostrud do. Do anim tempor in sunt officia elit fugiat nostrud in aliquip anim minim ex tempor. Ea amet occaecat Lorem non sit id aliquip in cillum enim. Mollit nulla amet ex ipsum esse aliquip cillum commodo.\r\n",
        registered: "2016-03-10T03:03:41 -02:00",
        friends: [
            {
                id: 0,
                name: "Riggs Solis",
            },
            {
                id: 1,
                name: "Cole Brooks",
            },
            {
                id: 2,
                name: "Lynch Robertson",
            },
        ],
    },
    {
        _id: "6581529f48e4bf8379a6a281",
        isActive: true,
        picture: "http://placehold.it/32x32",
        age: 26,
        name: "Silvia Carroll",
        gender: "female",
        email: "silviacarroll@rodeocean.com",
        phone: "+372 (991) 427-3287",
        address: "215 Coleman Street, Yogaville, New York, 8503",
        about: "Sit amet non reprehenderit eu ex. Ut sunt esse sunt est aliquip proident proident magna labore. Amet sint magna et et aliqua excepteur in ullamco et. Qui amet exercitation ullamco sunt cupidatat pariatur Lorem reprehenderit ut sunt et elit ex. Aliqua laboris ea nostrud incididunt ipsum do sint sunt est velit deserunt dolore Lorem deserunt.\r\n",
        registered: "2023-04-12T12:54:49 -03:00",
        friends: [
            {
                id: 0,
                name: "Lesley Holden",
            },
            {
                id: 1,
                name: "Dawn Charles",
            },
            {
                id: 2,
                name: "Daugherty Guerra",
            },
        ],
    },
    {
        _id: "6581529f71979beaec43a9cb",
        isActive: true,
        picture: "http://placehold.it/32x32",
        age: 26,
        name: "Wilkins Johnson",
        gender: "male",
        email: "wilkinsjohnson@rodeocean.com",
        phone: "+372 (874) 537-3858",
        address:
            "994 Dekoven Court, Flintville, Federated States Of Micronesia, 4592",
        about: "Lorem anim ea culpa incididunt. Eu adipisicing non nisi voluptate consequat. Elit officia deserunt reprehenderit ex nostrud aliqua dolor sit reprehenderit exercitation ut ullamco. Reprehenderit minim dolor tempor labore aliquip nisi est mollit proident veniam. Id excepteur esse laborum incididunt ea culpa ea.\r\n",
        registered: "2022-12-03T02:05:49 -02:00",
        friends: [
            {
                id: 0,
                name: "Tasha Ramos",
            },
            {
                id: 1,
                name: "Jeannette Durham",
            },
            {
                id: 2,
                name: "Bernard Castaneda",
            },
        ],
    },
    {
        _id: "6581529f6e554ff477125509",
        isActive: true,
        picture: "http://placehold.it/32x32",
        age: 25,
        name: "Carr Rodgers",
        gender: "male",
        email: "carrrodgers@rodeocean.com",
        phone: "+372 (990) 490-2075",
        address: "450 Colonial Road, Marne, Northern Mariana Islands, 5282",
        about: "In aliquip quis excepteur occaecat elit id elit dolore. Et aute ad laboris ipsum ut enim ad mollit enim. Sit sit officia laboris eu amet ut amet nisi qui elit nostrud ad tempor.\r\n",
        registered: "2014-02-11T07:01:28 -02:00",
        friends: [
            {
                id: 0,
                name: "Woodward Curry",
            },
            {
                id: 1,
                name: "Orr Emerson",
            },
            {
                id: 2,
                name: "Stacey Conley",
            },
        ],
    },
    {
        _id: "6581529f3bd4067bc74b3be6",
        isActive: true,
        picture: "http://placehold.it/32x32",
        age: 35,
        name: "Lawanda Clay",
        gender: "female",
        email: "lawandaclay@rodeocean.com",
        phone: "+372 (992) 476-2540",
        address: "136 McKibben Street, Idamay, Indiana, 1140",
        about: "Labore aliquip fugiat mollit amet dolor exercitation occaecat cupidatat. Reprehenderit aliqua reprehenderit labore qui veniam duis enim ea eu laborum exercitation. Veniam consectetur sint sit consectetur nostrud qui qui enim duis.\r\n",
        registered: "2015-12-06T05:15:41 -02:00",
        friends: [
            {
                id: 0,
                name: "Edith Terrell",
            },
            {
                id: 1,
                name: "Linda Graves",
            },
            {
                id: 2,
                name: "Agnes Bailey",
            },
        ],
    },
    {
        _id: "6581529fa77c845d70c19dfe",
        isActive: true,
        picture: "http://placehold.it/32x32",
        age: 29,
        name: "Beard Keller",
        gender: "male",
        email: "beardkeller@rodeocean.com",
        phone: "+372 (838) 589-3343",
        address: "319 Crown Street, Ferney, Oregon, 1021",
        about: "Dolore velit reprehenderit dolor excepteur commodo velit. Adipisicing labore deserunt eiusmod excepteur qui deserunt quis tempor culpa Lorem non dolor proident Lorem. Sit do officia nulla veniam duis commodo est elit excepteur ullamco culpa in. Velit consequat quis non veniam incididunt dolore tempor fugiat ex cillum nulla sunt amet sint. Irure deserunt ad magna est duis excepteur. In dolor adipisicing proident deserunt culpa ut qui duis reprehenderit velit pariatur culpa nulla.\r\n",
        registered: "2020-05-21T01:49:09 -03:00",
        friends: [
            {
                id: 0,
                name: "Fannie Fisher",
            },
            {
                id: 1,
                name: "Lourdes Knowles",
            },
            {
                id: 2,
                name: "Rivera Ferrell",
            },
        ],
    },
    {
        _id: "6581529fb0972256b489767a",
        isActive: false,
        picture: "http://placehold.it/32x32",
        age: 29,
        name: "Gill Horn",
        gender: "male",
        email: "gillhorn@rodeocean.com",
        phone: "+372 (819) 584-3835",
        address: "902 Hall Street, Staples, Colorado, 7544",
        about: "Sit id et irure excepteur quis laborum et nisi. Proident culpa non nulla enim tempor veniam. Cillum aliquip sit velit ad nulla elit non ea ad exercitation pariatur eu magna. Ex ipsum ipsum sint mollit.\r\n",
        registered: "2020-04-27T07:52:16 -03:00",
        friends: [
            {
                id: 0,
                name: "Myrna Oneill",
            },
            {
                id: 1,
                name: "Bobbie Cantu",
            },
            {
                id: 2,
                name: "Morin Giles",
            },
        ],
    },
    {
        _id: "6581529fcb836b4faeb055e6",
        isActive: true,
        picture: "http://placehold.it/32x32",
        age: 38,
        name: "Eileen Maxwell",
        gender: "female",
        email: "eileenmaxwell@rodeocean.com",
        phone: "+372 (818) 417-3393",
        address: "619 Fay Court, Greenwich, District Of Columbia, 8400",
        about: "Irure ad dolore sit nulla ex anim id. Nulla in do nisi aute proident. Quis quis nulla reprehenderit adipisicing incididunt qui id id. Enim amet aute minim pariatur consequat fugiat deserunt consectetur ea proident ipsum aute aute est. Labore voluptate ea ea mollit minim officia. Dolore esse consequat duis Lorem veniam nostrud excepteur nulla laborum veniam pariatur incididunt deserunt commodo.\r\n",
        registered: "2021-08-28T03:58:15 -03:00",
        friends: [
            {
                id: 0,
                name: "Denise Hays",
            },
            {
                id: 1,
                name: "Olivia Moses",
            },
            {
                id: 2,
                name: "Juliana Kirk",
            },
        ],
    },
    {
        _id: "6581529fe843433dd9f7e4c3",
        isActive: true,
        picture: "http://placehold.it/32x32",
        age: 39,
        name: "Sweeney Mack",
        gender: "male",
        email: "sweeneymack@rodeocean.com",
        phone: "+372 (963) 581-2833",
        address: "231 Dinsmore Place, Deercroft, Marshall Islands, 8480",
        about: "Reprehenderit voluptate irure veniam minim labore in qui dolore dolor amet eiusmod et nisi sunt. Commodo aliquip ea duis quis proident sunt duis. Ad amet enim exercitation est et duis duis. Reprehenderit quis voluptate enim aute incididunt pariatur amet quis irure. Minim eu ad proident id labore id laboris consectetur dolor in. Aliquip reprehenderit commodo ipsum do in.\r\n",
        registered: "2016-12-19T07:40:08 -02:00",
        friends: [
            {
                id: 0,
                name: "Dawson Quinn",
            },
            {
                id: 1,
                name: "Underwood Allison",
            },
            {
                id: 2,
                name: "Adele Murphy",
            },
        ],
    },
    {
        _id: "6581529f90b962e27e1d6424",
        isActive: false,
        picture: "http://placehold.it/32x32",
        age: 34,
        name: "Russo Dillard",
        gender: "male",
        email: "russodillard@rodeocean.com",
        phone: "+372 (914) 571-2258",
        address: "633 Furman Avenue, Deltaville, American Samoa, 1815",
        about: "Est ipsum veniam fugiat consequat amet sit excepteur do tempor esse commodo veniam in laboris. Cupidatat quis et sit dolor voluptate commodo pariatur pariatur sunt. Aliqua cillum voluptate sit sunt magna dolor esse amet. Tempor irure exercitation commodo est. Sit ea dolore labore cillum exercitation voluptate occaecat est commodo nisi incididunt reprehenderit anim eu. Anim mollit duis aliquip proident non aliqua exercitation consequat velit culpa eiusmod nostrud magna. Sit Lorem officia deserunt qui proident excepteur.\r\n",
        registered: "2020-11-03T04:36:42 -02:00",
        friends: [
            {
                id: 0,
                name: "Delia House",
            },
            {
                id: 1,
                name: "Lyons Romero",
            },
            {
                id: 2,
                name: "Lynn Huber",
            },
        ],
    },
    {
        _id: "6581529f6017b99c33a34147",
        isActive: true,
        picture: "http://placehold.it/32x32",
        age: 32,
        name: "Ortega Lambert",
        gender: "male",
        email: "ortegalambert@rodeocean.com",
        phone: "+372 (906) 592-3555",
        address: "181 Johnson Avenue, Bonanza, Maine, 2403",
        about: "Irure eiusmod elit ut nulla anim occaecat. Enim ut nisi esse commodo nostrud anim proident do voluptate est cupidatat voluptate consectetur. Nisi excepteur est deserunt pariatur. Duis do id do aliquip esse. Non ea do et ullamco amet nulla non laborum voluptate.\r\n",
        registered: "2017-03-02T06:21:01 -02:00",
        friends: [
            {
                id: 0,
                name: "Frye Chen",
            },
            {
                id: 1,
                name: "Harris Hebert",
            },
            {
                id: 2,
                name: "Virgie Williamson",
            },
        ],
    },
    {
        _id: "6581529fedc564b635486d5e",
        isActive: true,
        picture: "http://placehold.it/32x32",
        age: 40,
        name: "Nolan Reynolds",
        gender: "male",
        email: "nolanreynolds@rodeocean.com",
        phone: "+372 (970) 546-2026",
        address: "800 Congress Street, Roy, Arizona, 7388",
        about: "Ex irure tempor elit esse ad tempor consequat amet. Fugiat anim ipsum sunt ullamco aliqua magna. Ut minim ex eiusmod nisi consectetur duis. Sint ea ut mollit qui exercitation ex sint. Aliqua duis enim laborum fugiat in Lorem aliqua magna nostrud fugiat.\r\n",
        registered: "2023-03-14T12:01:08 -02:00",
        friends: [
            {
                id: 0,
                name: "Savage Rowland",
            },
            {
                id: 1,
                name: "Trujillo Nolan",
            },
            {
                id: 2,
                name: "Ingram Hobbs",
            },
        ],
    },
    {
        _id: "6581529f58680c6d66cc8061",
        isActive: true,
        picture: "http://placehold.it/32x32",
        age: 28,
        name: "Jacobson Gross",
        gender: "male",
        email: "jacobsongross@rodeocean.com",
        phone: "+372 (919) 555-3726",
        address: "712 Mill Road, Loyalhanna, Puerto Rico, 1582",
        about: "Duis dolore enim elit officia occaecat magna sunt veniam ipsum sunt nisi. Eu ullamco tempor Lorem aliquip nisi nostrud aliqua consectetur. Ad duis pariatur sit aliqua officia in commodo ullamco minim ea velit irure labore aliquip.\r\n",
        registered: "2022-10-20T07:48:50 -03:00",
        friends: [
            {
                id: 0,
                name: "Rochelle Morgan",
            },
            {
                id: 1,
                name: "Flynn Espinoza",
            },
            {
                id: 2,
                name: "Atkins Gray",
            },
        ],
    },
    {
        _id: "6581529f2d6dd7b9a7ee6037",
        isActive: false,
        picture: "http://placehold.it/32x32",
        age: 34,
        name: "Hensley Olson",
        gender: "male",
        email: "hensleyolson@rodeocean.com",
        phone: "+372 (851) 502-2017",
        address: "275 Lincoln Road, Frystown, Vermont, 8872",
        about: "Elit irure laborum eiusmod eu et tempor cillum dolor veniam quis sit fugiat. Voluptate qui est incididunt et adipisicing eu non ut. Sit eu sint sit minim laborum adipisicing do eiusmod laborum cillum id.\r\n",
        registered: "2016-06-01T07:44:05 -03:00",
        friends: [
            {
                id: 0,
                name: "Jamie Callahan",
            },
            {
                id: 1,
                name: "Aurora Yates",
            },
            {
                id: 2,
                name: "Desiree Lowery",
            },
        ],
    },
];

const tableBodyElement = document.querySelector("tbody");

students.forEach((student) => {
    const tableRowElement = document.createElement("tr");
    tableRowElement.innerHTML = `
       
        <td>${student.age}</td>
        <td>${student.name}</td>
        <td>${student.gender}</td>
        <td>${student.email}</td>
        <td>${student.phone}</td>
        <td>${student.address}</td>

    `;

    tableBodyElement.appendChild(tableRowElement);
});