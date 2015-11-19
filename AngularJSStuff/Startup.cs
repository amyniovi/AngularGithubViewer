using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularJSStuff.Startup))]
namespace AngularJSStuff
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
