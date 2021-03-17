using System;
using System.Threading.Tasks;
using Statiq.App;
using Statiq.Common;
using Statiq.Core;
using Statiq.Docs;
using Statiq.Yaml;

namespace Cake.Issues.Website
{
    public class Program
    {
        public static async Task<int> Main(string[] args) =>
          await Bootstrapper
            .Factory
            .CreateDocs(args)
            .RunAsync();
    }

    public class Addins : Pipeline
    {
        public Addins()
        {
            InputModules = new ModuleList(
                new ReadFiles("../addins/*.yml"));

            ProcessModules = new ModuleList(
                new ParseYaml());
        }
    }

    public class AddinCategories : Pipeline
    {
        public AddinCategories()
        {
            Dependencies.Add(nameof(Addins));

            ProcessModules = new ModuleList(
                new ConcatDocuments(nameof(Addins)),
                new GroupDocuments("Categories"),
                new SetDestination(Config.FromDocument(doc => new NormalizedPath("addins/" + @doc.GetString(Keys.GroupKey).ToLower().Replace(" ", "-") + "/index.html"))));
        }
    }

    public class DslAliases : Pipeline
    {
        public DslAliases()
        {
            Dependencies.Add(nameof(Statiq.Docs.Pipelines.Api));

            // TODO
            ProcessModules = new ModuleList(
                (IModule)new ConcatDocuments(nameof(Statiq.Docs.Pipelines.Api)));
        }
    }
}