import Typography from '@material-ui/core/Typography';

const GalleryComp = [

    {
        id: 1,
        image: "https://aghilas.fr/static/images/projects/iot/convoyer.png",
        name: "Convoyer",
        category: "IOT",
        date: "18-06-2021",
        link: "https://github.com/loupdemon/Convoyer-M5-stack",
        intro: "Delivery packages",
        description: <div>
            <Typography align="center" color="inherit" variant="h6">Convoyer developped with M5Stack and PHP API, and Dolibarr ERP/CRM</Typography>
            <Typography>
                Contributer: the same team <br />
                Technologies: HTML5, CSS3, PHP, C++, M5Stack <br />
            </Typography>
        </div>
    },
    {
        id: 2,
        image:"https://aghilas.fr/static/images/projects/web/time_manager-gotham.png",
        name: "Time Manager",
        category: "Web",
        date: "18-06-2021",
        link: "https://github.com/loupdemon/TIME-MANAGER-FOR-WORK",
        intro: "Track time of employees",
        description: <div>
            <Typography align="center" color="inherit" variant="h6">Time Manager developped with Elixir and NodeJS</Typography>
            <Typography>
                Contributer: the same team <br />
                Technologies: HTML5, CSS3, Elixir, NodeJS <br />
            </Typography>
        </div>
    },
    {
        id: 3,
        image: "https://aghilas.fr/static/images/projects/web/knod_logo.png",
        name: "Knod",
        category: "Mobile",
        date: "18-06-2021",
        link: "www.knod.fr",
        intro: "Mobile event app for students",
        description: <div>
            <Typography align="center" color="inherit" variant="h6">Knod developped with React Native, PHP? Symfony</Typography>
            <Typography>
                Contributer: the same team <br />
                Technologies: PHP, Symfony, React js, React Native <br />
            </Typography>
        </div>
    },
    {
        id: 4,
        image: "https://aghilas.fr/static/images/projects/android/geo_ar.png",
        name: "Geo AR",
        category: "Virtuality",
        date: "18-06-2021",
        link: "#",
        intro: "Geo Reality Augmented App which is developped ",        
        description: <div>
            <Typography align="center" color="inherit" variant="h6">Geo AR developped with unity, Vuforia and ARCore</Typography>
            <Typography>
                Contributer: the same team <br />
                Technologies: Unity, Vuforia, ARCore <br />
            </Typography>
        </div>
    }
];

export default GalleryComp;