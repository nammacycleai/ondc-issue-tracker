
// Types for our data model
export interface Issue {
  issue_id: string;
  title: string;
  description: string;
  source_type: 'Buyer' | 'Seller';
  source_app: string;
  destination_entity: string;
  level: 1 | 2 | 3 | 4;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Escalated';
  created_at: string;
  updated_at: string;
  escalated: boolean;
  resolved_by: string | null;
  notes: string[];
  documents: string[];
  timeline: TimelineEvent[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  level: 1 | 2 | 3 | 4;
  action: string;
  user: string;
  entity: string;
  notes?: string;
}

// Mock data
export const mockIssues: Issue[] = [
  {
    issue_id: "ISS-001",
    title: "Order Not Delivered",
    description: "Order marked as delivered but never received",
    source_type: "Buyer",
    source_app: "ONDC Buyer App",
    destination_entity: "Automated Resolution",
    level: 1,
    status: "In Progress",
    created_at: "2025-04-20T10:30:00Z",
    updated_at: "2025-04-20T14:45:00Z",
    escalated: false,
    resolved_by: null,
    notes: ["Customer reported missing delivery", "Delivery partner contacted"],
    documents: ["delivery_screenshot.jpg"],
    timeline: [
      {
        id: "TL-001-1",
        date: "2025-04-20T10:30:00Z",
        level: 1,
        action: "Issue Created",
        user: "John Doe",
        entity: "ONDC Buyer App",
        notes: "Order marked as delivered but never received"
      },
      {
        id: "TL-001-2",
        date: "2025-04-20T14:45:00Z",
        level: 1,
        action: "Automated Response",
        user: "System",
        entity: "Automated Resolution",
        notes: "Delivery partner contacted for verification"
      }
    ]
  },
  {
    issue_id: "ISS-002",
    title: "Incorrect Product Received",
    description: "Received different item than ordered",
    source_type: "Buyer",
    source_app: "ONDC Buyer App",
    destination_entity: "Internal GRO",
    level: 2,
    status: "Open",
    created_at: "2025-04-19T09:15:00Z",
    updated_at: "2025-04-21T11:20:00Z",
    escalated: true,
    resolved_by: null,
    notes: ["Initial automated resolution failed", "Escalated to internal GRO"],
    documents: ["wrong_item.jpg", "order_receipt.pdf"],
    timeline: [
      {
        id: "TL-002-1",
        date: "2025-04-19T09:15:00Z",
        level: 1,
        action: "Issue Created",
        user: "Jane Smith",
        entity: "ONDC Buyer App",
        notes: "Received different item than ordered"
      },
      {
        id: "TL-002-2",
        date: "2025-04-20T16:30:00Z",
        level: 1,
        action: "Automated Response Failed",
        user: "System",
        entity: "Automated Resolution",
        notes: "Could not resolve automatically"
      },
      {
        id: "TL-002-3",
        date: "2025-04-21T11:20:00Z",
        level: 2,
        action: "Escalated",
        user: "System",
        entity: "Internal GRO",
        notes: "Issue transferred to GRO for manual review"
      }
    ]
  },
  {
    issue_id: "ISS-003",
    title: "Refund Not Processed",
    description: "Return accepted but refund not received after 7 days",
    source_type: "Buyer",
    source_app: "ONDC Buyer App",
    destination_entity: "ODR Service Provider",
    level: 3,
    status: "In Progress",
    created_at: "2025-04-15T14:20:00Z",
    updated_at: "2025-04-22T09:45:00Z",
    escalated: true,
    resolved_by: null,
    notes: ["Refund delay beyond SLA", "GRO unable to process refund", "Escalated to ODR"],
    documents: ["return_receipt.pdf", "bank_statement.pdf", "communication_log.pdf"],
    timeline: [
      {
        id: "TL-003-1",
        date: "2025-04-15T14:20:00Z",
        level: 1,
        action: "Issue Created",
        user: "Michael Johnson",
        entity: "ONDC Buyer App",
        notes: "Refund not received after return"
      },
      {
        id: "TL-003-2",
        date: "2025-04-16T10:30:00Z",
        level: 1,
        action: "Automated Response",
        user: "System",
        entity: "Automated Resolution",
        notes: "Issue requires manual verification"
      },
      {
        id: "TL-003-3",
        date: "2025-04-17T15:40:00Z",
        level: 2,
        action: "Escalated to GRO",
        user: "System",
        entity: "Internal GRO",
        notes: "Refund verification in progress"
      },
      {
        id: "TL-003-4",
        date: "2025-04-22T09:45:00Z",
        level: 3,
        action: "Escalated to ODR",
        user: "Rajiv Kumar",
        entity: "Internal GRO",
        notes: "Unable to process refund, escalated to ODR"
      }
    ]
  },
  {
    issue_id: "ISS-004",
    title: "Product Damaged on Arrival",
    description: "New laptop delivered with cracked screen",
    source_type: "Buyer",
    source_app: "ONDC Buyer App",
    destination_entity: "Internal GRO",
    level: 2,
    status: "Resolved",
    created_at: "2025-04-18T13:10:00Z",
    updated_at: "2025-04-21T17:25:00Z",
    escalated: true,
    resolved_by: "Priya Sharma",
    notes: ["Product verified as damaged on delivery", "Replacement approved"],
    documents: ["damaged_laptop.jpg", "delivery_receipt.pdf"],
    timeline: [
      {
        id: "TL-004-1",
        date: "2025-04-18T13:10:00Z",
        level: 1,
        action: "Issue Created",
        user: "Rahul Singh",
        entity: "ONDC Buyer App",
        notes: "Laptop delivered with damaged screen"
      },
      {
        id: "TL-004-2",
        date: "2025-04-19T09:30:00Z",
        level: 1,
        action: "Automated Response",
        user: "System",
        entity: "Automated Resolution",
        notes: "High-value item damage requires manual verification"
      },
      {
        id: "TL-004-3",
        date: "2025-04-20T11:45:00Z",
        level: 2,
        action: "Escalated to GRO",
        user: "System",
        entity: "Internal GRO",
        notes: "Damage verification initiated"
      },
      {
        id: "TL-004-4",
        date: "2025-04-21T17:25:00Z",
        level: 2,
        action: "Issue Resolved",
        user: "Priya Sharma",
        entity: "Internal GRO",
        notes: "Replacement approved and dispatched"
      }
    ]
  },
  {
    issue_id: "ISS-005",
    title: "Unauthorized Transaction",
    description: "Multiple charges for single order",
    source_type: "Buyer",
    source_app: "ONDC Buyer App",
    destination_entity: "Court",
    level: 4,
    status: "In Progress",
    created_at: "2025-04-10T08:45:00Z",
    updated_at: "2025-04-23T16:30:00Z",
    escalated: true,
    resolved_by: null,
    notes: ["Multiple failed resolution attempts", "ODR unable to resolve", "Legal action initiated"],
    documents: ["bank_statement.pdf", "order_receipt.pdf", "communication_history.pdf", "legal_notice.pdf"],
    timeline: [
      {
        id: "TL-005-1",
        date: "2025-04-10T08:45:00Z",
        level: 1,
        action: "Issue Created",
        user: "Sonia Gupta",
        entity: "ONDC Buyer App",
        notes: "Multiple charges for single order"
      },
      {
        id: "TL-005-2",
        date: "2025-04-11T10:20:00Z",
        level: 1,
        action: "Automated Response",
        user: "System",
        entity: "Automated Resolution",
        notes: "Financial discrepancy detected, requires verification"
      },
      {
        id: "TL-005-3",
        date: "2025-04-13T14:35:00Z",
        level: 2,
        action: "Escalated to GRO",
        user: "System",
        entity: "Internal GRO",
        notes: "Financial verification initiated"
      },
      {
        id: "TL-005-4",
        date: "2025-04-17T11:50:00Z",
        level: 3,
        action: "Escalated to ODR",
        user: "Vikram Mehta",
        entity: "Internal GRO",
        notes: "Unable to resolve payment discrepancy, escalated to ODR"
      },
      {
        id: "TL-005-5",
        date: "2025-04-23T16:30:00Z",
        level: 4,
        action: "Escalated to Court",
        user: "Aisha Khan",
        entity: "ODR Service",
        notes: "Consumer seeking legal remedy, case referred to court"
      }
    ]
  },
  {
    issue_id: "ISS-006",
    title: "Fake Product Delivered",
    description: "Received counterfeit smartphone",
    source_type: "Buyer",
    source_app: "ONDC Buyer App",
    destination_entity: "ODR Service Provider",
    level: 3,
    status: "In Progress",
    created_at: "2025-04-17T16:05:00Z",
    updated_at: "2025-04-22T13:40:00Z",
    escalated: true,
    resolved_by: null,
    notes: ["Product authenticity verification failed", "Seller disputes claim", "Requires third-party verification"],
    documents: ["product_images.pdf", "authenticity_report.pdf"],
    timeline: [
      {
        id: "TL-006-1",
        date: "2025-04-17T16:05:00Z",
        level: 1,
        action: "Issue Created",
        user: "Arjun Reddy",
        entity: "ONDC Buyer App",
        notes: "Reporting counterfeit product"
      },
      {
        id: "TL-006-2",
        date: "2025-04-18T09:15:00Z",
        level: 1,
        action: "Automated Response",
        user: "System",
        entity: "Automated Resolution",
        notes: "Counterfeit claim requires expert verification"
      },
      {
        id: "TL-006-3",
        date: "2025-04-19T14:30:00Z",
        level: 2,
        action: "Escalated to GRO",
        user: "System",
        entity: "Internal GRO",
        notes: "Product authenticity verification initiated"
      },
      {
        id: "TL-006-4",
        date: "2025-04-22T13:40:00Z",
        level: 3,
        action: "Escalated to ODR",
        user: "Deepak Verma",
        entity: "Internal GRO",
        notes: "Seller disputes counterfeit claim, third-party expert needed"
      }
    ]
  },
  {
    issue_id: "ISS-007",
    title: "Billing Discrepancy",
    description: "Charged more than the listed price",
    source_type: "Buyer",
    source_app: "ONDC Buyer App",
    destination_entity: "Automated Resolution",
    level: 1,
    status: "Resolved",
    created_at: "2025-04-22T12:50:00Z",
    updated_at: "2025-04-23T14:15:00Z",
    escalated: false,
    resolved_by: "System",
    notes: ["Price difference verified", "Refund processed automatically"],
    documents: ["price_screenshot.jpg", "invoice.pdf"],
    timeline: [
      {
        id: "TL-007-1",
        date: "2025-04-22T12:50:00Z",
        level: 1,
        action: "Issue Created",
        user: "Neha Patel",
        entity: "ONDC Buyer App",
        notes: "Reporting price discrepancy"
      },
      {
        id: "TL-007-2",
        date: "2025-04-23T14:15:00Z",
        level: 1,
        action: "Issue Resolved",
        user: "System",
        entity: "Automated Resolution",
        notes: "Price difference confirmed and refunded automatically"
      }
    ]
  },
  {
    issue_id: "ISS-008",
    title: "Missing Items in Delivery",
    description: "Order received with items missing",
    source_type: "Buyer",
    source_app: "ONDC Buyer App",
    destination_entity: "Internal GRO",
    level: 2,
    status: "Resolved",
    created_at: "2025-04-20T15:25:00Z",
    updated_at: "2025-04-23T11:50:00Z",
    escalated: true,
    resolved_by: "Ankit Joshi",
    notes: ["Partial delivery confirmed", "Missing items shipped separately"],
    documents: ["delivery_checklist.pdf", "order_invoice.pdf"],
    timeline: [
      {
        id: "TL-008-1",
        date: "2025-04-20T15:25:00Z",
        level: 1,
        action: "Issue Created",
        user: "Meera Iyer",
        entity: "ONDC Buyer App",
        notes: "Reporting missing items in delivery"
      },
      {
        id: "TL-008-2",
        date: "2025-04-21T09:40:00Z",
        level: 1,
        action: "Automated Response",
        user: "System",
        entity: "Automated Resolution",
        notes: "Delivery verification needed"
      },
      {
        id: "TL-008-3",
        date: "2025-04-22T13:10:00Z",
        level: 2,
        action: "Escalated to GRO",
        user: "System",
        entity: "Internal GRO",
        notes: "Manual verification of order contents required"
      },
      {
        id: "TL-008-4",
        date: "2025-04-23T11:50:00Z",
        level: 2,
        action: "Issue Resolved",
        user: "Ankit Joshi",
        entity: "Internal GRO",
        notes: "Missing items confirmed and shipped separately"
      }
    ]
  },
  {
    issue_id: "ISS-009",
    title: "Late Delivery Compensation",
    description: "Delivery exceeded guaranteed delivery time by 3 days",
    source_type: "Buyer",
    source_app: "ONDC Buyer App",
    destination_entity: "Automated Resolution",
    level: 1,
    status: "Resolved",
    created_at: "2025-04-21T18:15:00Z",
    updated_at: "2025-04-22T10:30:00Z",
    escalated: false,
    resolved_by: "System",
    notes: ["Delivery delay verified", "Compensation processed as per policy"],
    documents: ["delivery_timeline.pdf"],
    timeline: [
      {
        id: "TL-009-1",
        date: "2025-04-21T18:15:00Z",
        level: 1,
        action: "Issue Created",
        user: "Karan Malhotra",
        entity: "ONDC Buyer App",
        notes: "Requesting compensation for late delivery"
      },
      {
        id: "TL-009-2",
        date: "2025-04-22T10:30:00Z",
        level: 1,
        action: "Issue Resolved",
        user: "System",
        entity: "Automated Resolution",
        notes: "Delay verified and compensation credited to wallet"
      }
    ]
  },
  {
    issue_id: "ISS-010",
    title: "Seller Misrepresentation",
    description: "Product features don't match the listing details",
    source_type: "Buyer",
    source_app: "ONDC Buyer App",
    destination_entity: "ODR Service Provider",
    level: 3,
    status: "In Progress",
    created_at: "2025-04-18T11:40:00Z",
    updated_at: "2025-04-23T15:55:00Z",
    escalated: true,
    resolved_by: null,
    notes: ["Product specifications mismatch confirmed", "Seller disputes intent to mislead", "Mediation required"],
    documents: ["product_specs.pdf", "listing_screenshots.pdf", "actual_product_details.pdf"],
    timeline: [
      {
        id: "TL-010-1",
        date: "2025-04-18T11:40:00Z",
        level: 1,
        action: "Issue Created",
        user: "Shreya Kapoor",
        entity: "ONDC Buyer App",
        notes: "Reporting product specification mismatch"
      },
      {
        id: "TL-010-2",
        date: "2025-04-19T13:20:00Z",
        level: 1,
        action: "Automated Response",
        user: "System",
        entity: "Automated Resolution",
        notes: "Specification verification required"
      },
      {
        id: "TL-010-3",
        date: "2025-04-21T10:15:00Z",
        level: 2,
        action: "Escalated to GRO",
        user: "System",
        entity: "Internal GRO",
        notes: "Technical specification verification initiated"
      },
      {
        id: "TL-010-4",
        date: "2025-04-23T15:55:00Z",
        level: 3,
        action: "Escalated to ODR",
        user: "Nitin Shah",
        entity: "Internal GRO",
        notes: "Dispute over intentional misrepresentation requires mediation"
      }
    ]
  }
];

// Generate summary statistics
export const getIssueStats = () => {
  const totalIssues = mockIssues.length;
  const resolved = mockIssues.filter(issue => issue.status === 'Resolved').length;
  const unresolved = totalIssues - resolved;
  const escalated = mockIssues.filter(issue => issue.escalated).length;
  
  const byLevel = [1, 2, 3, 4].map(level => ({
    level,
    count: mockIssues.filter(issue => issue.level === level).length,
    description: level === 1 ? "Automated" : 
                level === 2 ? "Internal GRO" :
                level === 3 ? "ODR Provider" : "Courts"
  }));
  
  const byStatus = ['Open', 'In Progress', 'Resolved', 'Escalated'].map(status => ({
    status,
    count: mockIssues.filter(issue => issue.status === status).length
  }));
  
  const bySource = ['Buyer', 'Seller'].map(source => ({
    source,
    count: mockIssues.filter(issue => issue.source_type === source).length
  }));
  
  return {
    totalIssues,
    resolved,
    unresolved,
    escalated,
    byLevel,
    byStatus,
    bySource
  };
};

// Search and filter issues
export const filterIssues = (
  issues: Issue[],
  filters: {
    searchTerm?: string;
    level?: number[];
    status?: string[];
    source?: string[];
    destination?: string[];
    dateRange?: { start: string; end: string };
  }
) => {
  return issues.filter(issue => {
    // Search term
    if (
      filters.searchTerm &&
      !issue.issue_id.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
      !issue.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) &&
      !issue.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
    ) {
      return false;
    }
    
    // Level filter
    if (filters.level && filters.level.length > 0 && !filters.level.includes(issue.level)) {
      return false;
    }
    
    // Status filter
    if (
      filters.status &&
      filters.status.length > 0 &&
      !filters.status.includes(issue.status)
    ) {
      return false;
    }
    
    // Source filter
    if (
      filters.source &&
      filters.source.length > 0 &&
      !filters.source.includes(issue.source_type)
    ) {
      return false;
    }
    
    // Destination filter
    if (
      filters.destination &&
      filters.destination.length > 0 &&
      !filters.destination.includes(issue.destination_entity)
    ) {
      return false;
    }
    
    // Date range filter
    if (filters.dateRange) {
      const issueDate = new Date(issue.created_at);
      const startDate = new Date(filters.dateRange.start);
      const endDate = new Date(filters.dateRange.end);
      
      if (issueDate < startDate || issueDate > endDate) {
        return false;
      }
    }
    
    return true;
  });
};

// Get unique filter values
export const getFilterOptions = () => {
  const destinations = Array.from(new Set(mockIssues.map(issue => issue.destination_entity)));
  const sourceApps = Array.from(new Set(mockIssues.map(issue => issue.source_app)));
  
  return {
    destinations,
    sourceApps
  };
};
