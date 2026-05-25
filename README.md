# Roofing Exterior Contractor Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AIRoofingExteriorContractorAssistant`
- `AIRoofingExteriorContractorOperations`
- `AIRoofingExteriorContractorAnalytics`
- `AIRoofingExteriorContractorWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/roofing-exterior-contractor-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5480`

Seeded users:
- `admin@roofing-exterior-contractor.local / admin123`
- `manager@roofing-exterior-contractor.local / manager123`
- `analyst@roofing-exterior-contractor.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/roofing-exterior-contractor-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5480 npm run smoke
```
