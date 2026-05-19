Param(
  [Parameter(ValueFromRemainingArguments=$true)]
  [String[]]$Args
)

$exe = Join-Path $PSScriptRoot "..\\.tools\\rancher\\rancher-v2.14.1\\rancher.exe"
if (-not (Test-Path $exe)) {
  Write-Error "Rancher binary not found at $exe. Download and extract the rancher CLI into .tools\\rancher."
  exit 1
}

# Forward all arguments to the rancher binary
& $exe @Args
