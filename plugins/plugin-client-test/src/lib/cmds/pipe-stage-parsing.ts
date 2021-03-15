/*
 * Copyright 2021 The Kubernetes Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ParsedOptions, Registrar } from '@kui-shell/core'

interface Options extends ParsedOptions {
  stage: number
}

export default function(registrar: Registrar) {
  registrar.listen<string, Options>('/kuiPipeStageParsing', args => {
    const { stage = 0 } = args.parsedOptions
    return args.pipeStages[stage].join(' ')
  })
  registrar.listen<string, Options>('/kuiPipeStageParsingNoOptions', args => {
    const { stage = 0 } = args.parsedOptions
    return args.pipeStagesNoOptions[stage].join(' ')
  })
}