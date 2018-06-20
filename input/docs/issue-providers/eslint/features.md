---
Order: 20
Title: Features
Description: Features of the Cake.Issues.EsLint addin.
---
The [Cake.Issues.EsLint addin] provides the following features:

* Reads issues reported by ESLint.
* Supported ESLint formatters:
  * [json formatter]
* Supported comment formats:
  * Plain text
* Provides URLs for all issues.
* Support for custom URL resolving using the [EsLintAddRuleUrlResolver] alias.
* Supported `IIssue` properties:
  * [ProviderType]
  * [ProviderName]
  * [AffectedFileRelativePath]
  * [Line]
  * [Message]
  * [Priority]
  * [PriorityName]
  * [Rule]
  * [RuleUrl]

[Cake.Issues.EsLint addin]: https://www.nuget.org/packages/Cake.Issues.EsLint
[json formatter]: http://eslint.org/docs/user-guide/formatters/#json
[EsLintAddRuleUrlResolver]: ../../../api/Cake.Issues.EsLint/EsLintIssuesAliases/D64301E6
[ProviderType]: ../../../api/Cake.Issues/IIssue/D5A24C72
[ProviderName]: ../../../api/Cake.Issues/IIssue/FA8BB1A0
[AffectedFileRelativePath]: ../../../api/Cake.Issues/IIssue/BF0CD6F1
[Line]: ../../../api/Cake.Issues/IIssue/F2A42E89
[Message]: ../../../api/Cake.Issues/IIssue/18537A3D
[Priority]: ../../../api/Cake.Issues/IIssue/BFEFFBB1
[PriorityName]: ../../../api/Cake.Issues/IIssue/05A39052
[Rule]: ../../../api/Cake.Issues/IIssue/C8BCE21E
[RuleUrl]: ../../../api/Cake.Issues/IIssue/48A6F355