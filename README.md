<div style="display: flex; gap: 10px; justify-content: center; align-items: center">
<a href="https://www.pulumi.com" title="Pulumi - Modern Infrastructure as Code - AWS Azure Kubernetes Containers Serverless">
    <img src="https://www.pulumi.com/images/logo/logo-on-white-box.svg?" width="200">
</a>

<a href="https://www.localstack.cloud/" title="Localstack - Run Locally, Deploy Globally">
    <img src="https://avatars.githubusercontent.com/u/28732122?s=200&v=4" width="100">
</a>

<a href="https://aws.amazon.com/" title="Amazon Web Service">
    <img src="https://avatars.githubusercontent.com/u/2232217?s=200&v=4" width="100">
</a>
</div>

Example of using Pulumi with Localstack 🚀. This repo uses Developer Containers to setup the development environment 🐧

## Prerequisites

- [Docker](https://www.docker.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

# Getting Started

- Clone the repository `git clone git@github.com:NafiAsib/pulumi-conf.git`
- Open the project in VSCode `code pulumi-conf`
- Click on the `Reopen in Container` button on the bottom right corner of the VSCode.

Once inside the container, you can run Pulumi commands as usual.

**Start localstack**

```bash
localstack start
```
