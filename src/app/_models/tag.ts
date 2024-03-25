export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'darkred')
    static readonly TYPESCRIPT = new Tag('Typescript', '#007acc')
    static readonly PYTHON = new Tag('Python', 'pink')
    static readonly CSHARP = new Tag('C#', 'grey')
    static readonly JAVA = new Tag('Angular', 'orange')
    static readonly NODEJS = new Tag('Node.JS', 'green')
    static readonly ASPNET = new Tag('ASP.NET', 'purple')
    static readonly JAVASCRIPT = new Tag('Javascript', '#323330')
    static readonly REACT = new Tag('React', '#007acc')

    private constructor(private readonly key :string, public readonly color : string){

    }

    toString(){
        return this.key;
    }
}