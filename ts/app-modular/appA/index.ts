export * from './entities';
export * from './structures';
export * from './enums';
export * from './logics';
export * from './pages';
export * from './processes';

type Url = '/dashboard' | '/list';

class View {
    destination(url: new () => View) {
        url.path
    }
}

class ListView extends View {
    static path = '/listView';
}



class UpdateView extends View {
    // @param
    id: number = 22;// url.query.id;


    onClick() {
        this.destination(ListView);
    }

}
