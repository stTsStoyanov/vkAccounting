class ViewController{
    constructor(){
        window.addEventListener('hashchange', this.handleHashChange);
        window.addEventListener('load', this.handleHashChange);
    }

    handleHashChange = () =>{

            let hash = window.location.hash.slice(1) || "home";

            let pageIds = ["home", "services", "contacts", "personalData"];

            pageIds.forEach(page =>{
                
                let currentPage = document.getElementById(page);

                if(hash === page){
                    currentPage.style.display = "block";
                }else{
                    currentPage.style.display = "none";
                }
            });

            

            switch(hash){
                case "home":
                case "services":
                case "contacts":
                case "personalData":
            }

    }

}

let viewController = new ViewController();