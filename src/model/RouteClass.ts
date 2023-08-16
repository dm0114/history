class RouteClass{
    title: string;
    href: string;
    description : string;
    constructor(key: string, label: string, icon: string){
        this.title = key;
        this.href = label;
        this.description = icon;
    }
}

export default RouteClass;

