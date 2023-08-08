# Namaste_React_Learnings
1. Fork a Repository:
When you fork a repository on GitHub, you create your own copy of that repository under your GitHub account. This allows you to make changes without affecting the original repository.

Example: Go to the repository you want to fork (let's call it original-repo) and click the "Fork" button on the upper right corner of the GitHub page. This will create a fork of the original-repo under your account.

2. Clone Your Fork:
Cloning means creating a local copy of a repository on your computer. This allows you to work on the code locally.

Example: Open your terminal and use the following command to clone your forked repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/forked-repo.git
Replace your-username with your GitHub username and forked-repo with the name of the repository you forked.

3. Create a New Branch:
Branches are used to work on separate features or fixes without affecting the main codebase.

Example: Create a new branch named feature-branch:

bash
Copy code
git checkout -b feature-branch
4. Make and Commit Changes:
Make the necessary changes to the code and commit them to your local branch.

Example: Make changes to a file, then stage and commit them:

bash
Copy code
git add modified-file
git commit -m "Added new feature"
5. Push Changes to Your Fork:
Push your local commits to your fork on GitHub.

Example: Push the changes from your local branch to your forked repository:

bash
Copy code
git push origin feature-branch
6. Create a Pull Request:
A pull request is a request to merge your changes from your forked repository into the original repository.

Example: Go to the original repository on GitHub, switch to the feature-branch branch, and click the "New Pull Request" button. Choose the base repository (where you want to merge your changes) and the base branch (usually main or master). Compare it with your feature-branch and create the pull request.

7. Discuss and Review:
Collaborators and maintainers of the original repository can review your changes, leave comments, and request modifications.

Example: Engage in discussions on the pull request page, make any necessary updates based on feedback, and address any concerns raised by reviewers.

8. Merge Changes:
Once the pull request is approved, the changes can be merged into the original repository.

Example: After approval, click the "Merge" button on the pull request page to merge your changes into the original repository. Optionally, you can choose to squash or rebase your commits before merging.

Congratulations, you've successfully contributed to the original repository using the GitHub workflow! This process allows for collaborative development and ensures that changes are thoroughly reviewed before being integrated into the main codebase.
