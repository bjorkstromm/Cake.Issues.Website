
var camelCaseTokenizer = function (obj) {
    var previous = '';
    return obj.toString().trim().split(/[\s\-]+|(?=[A-Z])/).reduce(function(acc, cur) {
        var current = cur.toLowerCase();
        if(acc.length === 0) {
            previous = current;
            return acc.concat(current);
        }
        previous = previous.concat(current);
        return acc.concat([current, previous]);
    }, []);
}
lunr.tokenizer.registerFunction(camelCaseTokenizer, 'camelCaseTokenizer')
var searchModule = function() {
    var idMap = [];
    function y(e) { 
        idMap.push(e); 
    }
    var idx = lunr(function() {
        this.field('title', { boost: 10 });
        this.field('content');
        this.field('description', { boost: 5 });
        this.field('tags', { boost: 50 });
        this.ref('id');
        this.tokenizer(camelCaseTokenizer);

        this.pipeline.remove(lunr.stopWordFilter);
        this.pipeline.remove(lunr.stemmer);
    });
    function a(e) { 
        idx.add(e); 
    }

    a({
        id:0,
        title:"FileLinkType",
        content:"FileLinkType",
        description:'',
        tags:''
    });

    a({
        id:1,
        title:"Aliases",
        content:"Aliases",
        description:'',
        tags:''
    });

    a({
        id:2,
        title:"FakeRuleUrlResolver",
        content:"FakeRuleUrlResolver",
        description:'',
        tags:''
    });

    a({
        id:3,
        title:"IIssueReportFormat",
        content:"IIssueReportFormat",
        description:'',
        tags:''
    });

    a({
        id:4,
        title:"LogFileFormat",
        content:"LogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:5,
        title:"ReportIssuesToPullRequestSettings",
        content:"ReportIssuesToPullRequestSettings",
        description:'',
        tags:''
    });

    a({
        id:6,
        title:"IIssueExtension",
        content:"IIssueExtension",
        description:'',
        tags:''
    });

    a({
        id:7,
        title:"DocFxIssuesSettings",
        content:"DocFxIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:8,
        title:"GenericIssueReportFormatSettings",
        content:"GenericIssueReportFormatSettings",
        description:'',
        tags:''
    });

    a({
        id:9,
        title:"GenericIssueReportFormatAliases",
        content:"GenericIssueReportFormatAliases",
        description:'',
        tags:''
    });

    a({
        id:10,
        title:"IssueCommentFormat",
        content:"IssueCommentFormat",
        description:'',
        tags:''
    });

    a({
        id:11,
        title:"MsBuildIssuesSettings",
        content:"MsBuildIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:12,
        title:"TfsPullRequestVote",
        content:"TfsPullRequestVote",
        description:'',
        tags:''
    });

    a({
        id:13,
        title:"PullRequestDiscussionResolution",
        content:"PullRequestDiscussionResolution",
        description:'',
        tags:''
    });

    a({
        id:14,
        title:"CreateIssueReportSettings",
        content:"CreateIssueReportSettings",
        description:'',
        tags:''
    });

    a({
        id:15,
        title:"ViewBagHelper",
        content:"ViewBagHelper",
        description:'',
        tags:''
    });

    a({
        id:16,
        title:"TfsPullRequestSettings",
        content:"TfsPullRequestSettings",
        description:'',
        tags:''
    });

    a({
        id:17,
        title:"IPullRequestDiscussionThread",
        content:"IPullRequestDiscussionThread",
        description:'',
        tags:''
    });

    a({
        id:18,
        title:"IssuesAliasConstants",
        content:"IssuesAliasConstants",
        description:'',
        tags:''
    });

    a({
        id:19,
        title:"EsLintIssuesProvider",
        content:"EsLintIssuesProvider",
        description:'',
        tags:''
    });

    a({
        id:20,
        title:"ReportingAliasConstants",
        content:"ReportingAliasConstants",
        description:'',
        tags:''
    });

    a({
        id:21,
        title:"PullRequestsAliasConstants",
        content:"PullRequestsAliasConstants",
        description:'',
        tags:''
    });

    a({
        id:22,
        title:"FileLinkSettings",
        content:"FileLinkSettings",
        description:'',
        tags:''
    });

    a({
        id:23,
        title:"PullRequestSystem",
        content:"PullRequestSystem",
        description:'',
        tags:''
    });

    a({
        id:24,
        title:"ReportColumn",
        content:"ReportColumn",
        description:'',
        tags:''
    });

    a({
        id:25,
        title:"PullRequestDiscussionStatus",
        content:"PullRequestDiscussionStatus",
        description:'',
        tags:''
    });

    a({
        id:26,
        title:"IBaseIssueComponent",
        content:"IBaseIssueComponent",
        description:'',
        tags:''
    });

    a({
        id:27,
        title:"BaseRuleDescription",
        content:"BaseRuleDescription",
        description:'',
        tags:''
    });

    a({
        id:28,
        title:"Aliases",
        content:"Aliases",
        description:'',
        tags:''
    });

    a({
        id:29,
        title:"PullRequestIssuesException",
        content:"PullRequestIssuesException",
        description:'',
        tags:''
    });

    a({
        id:30,
        title:"ColumnSortOrder",
        content:"ColumnSortOrder",
        description:'',
        tags:''
    });

    a({
        id:31,
        title:"MsBuildRuleDescription",
        content:"MsBuildRuleDescription",
        description:'',
        tags:''
    });

    a({
        id:32,
        title:"EsLintIssuesSettings",
        content:"EsLintIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:33,
        title:"InspectCodeIssuesSettings",
        content:"InspectCodeIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:34,
        title:"IssueProvider",
        content:"IssueProvider",
        description:'',
        tags:''
    });

    a({
        id:35,
        title:"GenericIssueReportTemplate",
        content:"GenericIssueReportTemplate",
        description:'',
        tags:''
    });

    a({
        id:36,
        title:"MsBuildIssuesProvider",
        content:"MsBuildIssuesProvider",
        description:'',
        tags:''
    });

    a({
        id:37,
        title:"RepositorySettings",
        content:"RepositorySettings",
        description:'',
        tags:''
    });

    a({
        id:38,
        title:"HtmlDxDataGridOption",
        content:"HtmlDxDataGridOption",
        description:'',
        tags:''
    });

    a({
        id:39,
        title:"MarkdownlintRuleDescription",
        content:"MarkdownlintRuleDescription",
        description:'',
        tags:''
    });

    a({
        id:40,
        title:"Issue",
        content:"Issue",
        description:'',
        tags:''
    });

    a({
        id:41,
        title:"IPullRequestDiscussionComment",
        content:"IPullRequestDiscussionComment",
        description:'',
        tags:''
    });

    a({
        id:42,
        title:"DevExtremeThemeExtensions",
        content:"DevExtremeThemeExtensions",
        description:'',
        tags:''
    });

    a({
        id:43,
        title:"BaseRuleUrlResolver",
        content:"BaseRuleUrlResolver",
        description:'',
        tags:''
    });

    a({
        id:44,
        title:"GenericIssueReportFormatSettingsExtensions",
        content:"GenericIssueReportFormatSettingsExtensions",
        description:'',
        tags:''
    });

    a({
        id:45,
        title:"IssueReportFormat",
        content:"IssueReportFormat",
        description:'',
        tags:''
    });

    a({
        id:46,
        title:"LogFileFormat",
        content:"LogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:47,
        title:"PullRequestIssueResult",
        content:"PullRequestIssueResult",
        description:'',
        tags:''
    });

    a({
        id:48,
        title:"IssuePriority",
        content:"IssuePriority",
        description:'',
        tags:''
    });

    a({
        id:49,
        title:"MsBuildIssuesAliases",
        content:"MsBuildIssuesAliases",
        description:'',
        tags:''
    });

    a({
        id:50,
        title:"LogFileFormat",
        content:"LogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:51,
        title:"BaseIssueComponent",
        content:"BaseIssueComponent",
        description:'',
        tags:''
    });

    a({
        id:52,
        title:"IPullRequestSystemExtension",
        content:"IPullRequestSystemExtension",
        description:'',
        tags:''
    });

    a({
        id:53,
        title:"ReadIssuesSettings",
        content:"ReadIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:54,
        title:"ColumnSortOrderExtensions",
        content:"ColumnSortOrderExtensions",
        description:'',
        tags:''
    });

    a({
        id:55,
        title:"IIssue",
        content:"IIssue",
        description:'',
        tags:''
    });

    a({
        id:56,
        title:"Aliases",
        content:"Aliases",
        description:'',
        tags:''
    });

    a({
        id:57,
        title:"IssuesReader",
        content:"IssuesReader",
        description:'',
        tags:''
    });

    a({
        id:58,
        title:"PullRequestDiscussionThread",
        content:"PullRequestDiscussionThread",
        description:'',
        tags:''
    });

    a({
        id:59,
        title:"DocFxIssuesAliases",
        content:"DocFxIssuesAliases",
        description:'',
        tags:''
    });

    a({
        id:60,
        title:"MarkdownlintIssuesProvider",
        content:"MarkdownlintIssuesProvider",
        description:'',
        tags:''
    });

    a({
        id:61,
        title:"MarkdownlintIssuesAliases",
        content:"MarkdownlintIssuesAliases",
        description:'',
        tags:''
    });

    a({
        id:62,
        title:"FakeIssueProvider",
        content:"FakeIssueProvider",
        description:'',
        tags:''
    });

    a({
        id:63,
        title:"ILogFileFormat",
        content:"ILogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:64,
        title:"IssueBuilder",
        content:"IssueBuilder",
        description:'',
        tags:''
    });

    a({
        id:65,
        title:"IssuesArgumentChecks",
        content:"IssuesArgumentChecks",
        description:'',
        tags:''
    });

    a({
        id:66,
        title:"ILogFileFormat",
        content:"ILogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:67,
        title:"DevExtremeTheme",
        content:"DevExtremeTheme",
        description:'',
        tags:''
    });

    a({
        id:68,
        title:"ExceptionAssertExtensions",
        content:"ExceptionAssertExtensions",
        description:'',
        tags:''
    });

    a({
        id:69,
        title:"InspectCodeIssuesAliases",
        content:"InspectCodeIssuesAliases",
        description:'',
        tags:''
    });

    a({
        id:70,
        title:"IPullRequestSystem",
        content:"IPullRequestSystem",
        description:'',
        tags:''
    });

    a({
        id:71,
        title:"FakeIssueComponent",
        content:"FakeIssueComponent",
        description:'',
        tags:''
    });

    a({
        id:72,
        title:"StringPathExtensions",
        content:"StringPathExtensions",
        description:'',
        tags:''
    });

    a({
        id:73,
        title:"ITfsCredentials",
        content:"ITfsCredentials",
        description:'',
        tags:''
    });

    a({
        id:74,
        title:"IIssueProvider",
        content:"IIssueProvider",
        description:'',
        tags:''
    });

    a({
        id:75,
        title:"TfsPullRequestSystemAliases",
        content:"TfsPullRequestSystemAliases",
        description:'',
        tags:''
    });

    a({
        id:76,
        title:"FakeRuleDescription",
        content:"FakeRuleDescription",
        description:'',
        tags:''
    });

    a({
        id:77,
        title:"EsLintIssuesAliases",
        content:"EsLintIssuesAliases",
        description:'',
        tags:''
    });

    a({
        id:78,
        title:"ILogFileFormat",
        content:"ILogFileFormat",
        description:'',
        tags:''
    });

    a({
        id:79,
        title:"MarkdownlintIssuesSettings",
        content:"MarkdownlintIssuesSettings",
        description:'',
        tags:''
    });

    a({
        id:80,
        title:"PullRequestDiscussionComment",
        content:"PullRequestDiscussionComment",
        description:'',
        tags:''
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/FileLinkType',
        title:"FileLinkType",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/Aliases',
        title:"Aliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeRuleUrlResolver',
        title:"FakeRuleUrlResolver",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting/IIssueReportFormat',
        title:"IIssueReportFormat",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild/LogFileFormat',
        title:"LogFileFormat",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/ReportIssuesToPullRequestSettings',
        title:"ReportIssuesToPullRequestSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/IIssueExtension',
        title:"IIssueExtension",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.DocFx/DocFxIssuesSettings',
        title:"DocFxIssuesSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/GenericIssueReportFormatSettings',
        title:"GenericIssueReportFormatSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/GenericIssueReportFormatAliases',
        title:"GenericIssueReportFormatAliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IssueCommentFormat',
        title:"IssueCommentFormat",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild/MsBuildIssuesSettings',
        title:"MsBuildIssuesSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests.Tfs/TfsPullRequestVote',
        title:"TfsPullRequestVote",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestDiscussionResolution',
        title:"PullRequestDiscussionResolution",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting/CreateIssueReportSettings',
        title:"CreateIssueReportSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/ViewBagHelper',
        title:"ViewBagHelper",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests.Tfs/TfsPullRequestSettings',
        title:"TfsPullRequestSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/IPullRequestDiscussionThread',
        title:"IPullRequestDiscussionThread",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IssuesAliasConstants',
        title:"IssuesAliasConstants",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.EsLint/EsLintIssuesProvider',
        title:"EsLintIssuesProvider",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting/ReportingAliasConstants',
        title:"ReportingAliasConstants",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestsAliasConstants',
        title:"PullRequestsAliasConstants",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/FileLinkSettings',
        title:"FileLinkSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestSystem',
        title:"PullRequestSystem",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/ReportColumn',
        title:"ReportColumn",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestDiscussionStatus',
        title:"PullRequestDiscussionStatus",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IBaseIssueComponent_1',
        title:"IBaseIssueComponent<T>",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/BaseRuleDescription',
        title:"BaseRuleDescription",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting/Aliases',
        title:"Aliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestIssuesException',
        title:"PullRequestIssuesException",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/ColumnSortOrder',
        title:"ColumnSortOrder",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild/MsBuildRuleDescription',
        title:"MsBuildRuleDescription",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.EsLint/EsLintIssuesSettings',
        title:"EsLintIssuesSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.InspectCode/InspectCodeIssuesSettings',
        title:"InspectCodeIssuesSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IssueProvider',
        title:"IssueProvider",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/GenericIssueReportTemplate',
        title:"GenericIssueReportTemplate",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild/MsBuildIssuesProvider',
        title:"MsBuildIssuesProvider",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/RepositorySettings',
        title:"RepositorySettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/HtmlDxDataGridOption',
        title:"HtmlDxDataGridOption",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Markdownlint/MarkdownlintRuleDescription',
        title:"MarkdownlintRuleDescription",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/Issue',
        title:"Issue",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/IPullRequestDiscussionComment',
        title:"IPullRequestDiscussionComment",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/DevExtremeThemeExtensions',
        title:"DevExtremeThemeExtensions",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/BaseRuleUrlResolver_1',
        title:"BaseRuleUrlResolver<T>",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/GenericIssueReportFormatSettingsExtensions',
        title:"GenericIssueReportFormatSettingsExtensions",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting/IssueReportFormat',
        title:"IssueReportFormat",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Markdownlint/LogFileFormat',
        title:"LogFileFormat",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestIssueResult',
        title:"PullRequestIssueResult",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IssuePriority',
        title:"IssuePriority",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild/MsBuildIssuesAliases',
        title:"MsBuildIssuesAliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.EsLint/LogFileFormat',
        title:"LogFileFormat",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/BaseIssueComponent_1',
        title:"BaseIssueComponent<T>",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/IPullRequestSystemExtension',
        title:"IPullRequestSystemExtension",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/ReadIssuesSettings',
        title:"ReadIssuesSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/ColumnSortOrderExtensions',
        title:"ColumnSortOrderExtensions",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IIssue',
        title:"IIssue",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/Aliases',
        title:"Aliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IssuesReader',
        title:"IssuesReader",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestDiscussionThread',
        title:"PullRequestDiscussionThread",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.DocFx/DocFxIssuesAliases',
        title:"DocFxIssuesAliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Markdownlint/MarkdownlintIssuesProvider',
        title:"MarkdownlintIssuesProvider",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Markdownlint/MarkdownlintIssuesAliases',
        title:"MarkdownlintIssuesAliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeIssueProvider',
        title:"FakeIssueProvider",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Markdownlint/ILogFileFormat',
        title:"ILogFileFormat",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IssueBuilder',
        title:"IssueBuilder",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IssuesArgumentChecks',
        title:"IssuesArgumentChecks",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.MsBuild/ILogFileFormat',
        title:"ILogFileFormat",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Reporting.Generic/DevExtremeTheme',
        title:"DevExtremeTheme",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/ExceptionAssertExtensions',
        title:"ExceptionAssertExtensions",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.InspectCode/InspectCodeIssuesAliases',
        title:"InspectCodeIssuesAliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/IPullRequestSystem',
        title:"IPullRequestSystem",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeIssueComponent',
        title:"FakeIssueComponent",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/StringPathExtensions',
        title:"StringPathExtensions",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests.Tfs/ITfsCredentials',
        title:"ITfsCredentials",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues/IIssueProvider',
        title:"IIssueProvider",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests.Tfs/TfsPullRequestSystemAliases',
        title:"TfsPullRequestSystemAliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Testing/FakeRuleDescription',
        title:"FakeRuleDescription",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.EsLint/EsLintIssuesAliases',
        title:"EsLintIssuesAliases",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.EsLint/ILogFileFormat',
        title:"ILogFileFormat",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.Markdownlint/MarkdownlintIssuesSettings',
        title:"MarkdownlintIssuesSettings",
        description:""
    });

    y({
        url:'/Cake.Issues.Website/api/Cake.Issues.PullRequests/PullRequestDiscussionComment',
        title:"PullRequestDiscussionComment",
        description:""
    });

    return {
        search: function(q) {
            return idx.search(q).map(function(i) {
                return idMap[i.ref];
            });
        }
    };
}();
