---
wizard:
    description: WizardDescriptionInTopmatter
    steps:
        - match: Before you begin
          name: TestRewritingOfStepName
        - name: Prepare local Kubernetes cluster
          description: TestDescription2
        - Install the Kubernetes CLI
        - Install the Knative CLI
        - Install the Knative "Quickstart" environment
---

--8<-- "https://raw.githubusercontent.com/knative/docs/main/docs/getting-started/README.md"